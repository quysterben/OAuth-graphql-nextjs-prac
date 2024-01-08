import { CommonSchema } from './Common.schema'
import { AdminSchema } from './Admin.schema'

const TypeDefs = [
  /* GraphQL */ `
    type Query {
      root: String
    }
    type Mutation {
      root: String
    }
  `,
  CommonSchema,
  AdminSchema
]

export default TypeDefs
