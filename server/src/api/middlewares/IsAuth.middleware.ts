import { GraphQLError } from 'graphql'

const IsAuth = (user: User) => {
  if (!user) {
    throw new GraphQLError('Not authenticated', {
      extensions: {
        status: 401
      }
    })
  }
}

export default IsAuth
