import db from '~/models'
import * as jwt from 'jsonwebtoken'
import { GraphQLError } from 'graphql'

const verifyToken = async (token: string) => {
  try {
    if (!token) return null
    const { userId } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as JwtPayload
    const user = await db.User.findById(userId)
    if (!user) throw new GraphQLError('User not found', { extensions: { status: 404 } })
    return user
  } catch (error: any) {
    throw new GraphQLError(error)
  }
}

const auth = async (payload: any) => {
  const token = (payload.req.headers && payload.req.headers.authorization) || ''
  const user = await verifyToken(token)
  return { user, db }
}

export default auth
