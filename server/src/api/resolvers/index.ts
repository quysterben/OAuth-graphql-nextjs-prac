import CommonResolvers from './common'
import AdminResolvers from './admin'

const Resolvers = {
  ...CommonResolvers,
  ...AdminResolvers
}

export default Resolvers
