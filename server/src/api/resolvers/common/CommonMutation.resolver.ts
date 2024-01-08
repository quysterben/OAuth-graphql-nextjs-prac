import * as jwt from 'jsonwebtoken'

import bcrypt from 'bcryptjs'

import { GraphQLError } from 'graphql'

const accessTokenExpiresTime = '1h'
const refreshTokenExpiresTime = '7d'

const CommonMutationResolver = {
  Mutation: {
    async register(root: any, args: any, context: Context) {
      const { input } = args
      const { username, email, password } = input

      const { db } = context

      try {
        const checkUser = await db.User.findOne({ email })
        if (checkUser) {
          throw new GraphQLError('User already exists', {
            extensions: {
              status: 409
            }
          })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await db.User.create({
          username,
          email,
          password: hashedPassword
        })

        return { ...user }
      } catch (error: any) {
        throw new GraphQLError(error)
      }
    },

    async login(root: any, args: any, context: Context) {
      const { input } = args
      const { email, password } = input
      const { db } = context

      try {
        const user = await db.User.findOne({ email })

        if (!user)
          throw new GraphQLError('No user with that email', {
            extensions: {
              status: 404
            }
          })

        if (user && bcrypt.compareSync(password, user.password!)) {
          const accessToken = createAccessToken({ userId: user._id, role: user.role })
          const refreshToken = createRefreshToken({ userId: user._id, role: user.role })
          return {
            accessToken,
            user
          }
        }

        throw new GraphQLError('Invalid password', {
          extensions: {
            status: 401
          }
        })
      } catch (error: any) {
        throw new GraphQLError(error)
      }
    }
  }
}

const createAccessToken = (payload: jwt.JwtPayload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: accessTokenExpiresTime })
}

const createRefreshToken = (payload: jwt.JwtPayload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: refreshTokenExpiresTime })
}

export default CommonMutationResolver
