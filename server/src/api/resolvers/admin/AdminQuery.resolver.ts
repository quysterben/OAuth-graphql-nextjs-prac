import { GraphQLError } from 'graphql'

import AdminMiddleware from '~/api/middlewares/Admin.middleware'
import isAuth from '~/api/middlewares/IsAuth.middleware'

const AdminQueryResolver = {
  Query: {
    async getAllUsers(root: any, args: any, context: Context) {
      const { db, user } = context
      try {
        isAuth(user)
        AdminMiddleware(user)
        const users = await db.User.find({})
        return users
      } catch (error: any) {
        throw new GraphQLError(error)
      }
    }
  }
}

export default AdminQueryResolver
