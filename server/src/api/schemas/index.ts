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

  // ...Import Schemas
  CommonSchema,
  AdminSchema
]

export default TypeDefs
