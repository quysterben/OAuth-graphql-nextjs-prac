import { GraphQLError } from 'graphql'

const AdminMiddleware = (user: User) => {
  if (user.role !== 'admin') {
    throw new GraphQLError('You are not allowed to do this')
  }
}

export default AdminMiddleware
