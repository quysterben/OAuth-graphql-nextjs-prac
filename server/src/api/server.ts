import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'

// Connect Database
import db from '~/models'
db.mongoose
  .connect(
    `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@ecomshopcluster.evimone.mongodb.net/${process.env.DATABASE_NAME}`
  )
  .then(() => {
    console.log('Database connected!')
  })
  .catch((error: any) => {
    console.error('Connection error: ', error)
    process.exit
  })

// Import GraphQL schema.
import TypeDefs from './schemas'
import Resolvers from './resolvers'
import Contexts from './contexts'

import { makeExecutableSchema } from '@graphql-tools/schema'

const yoga = createYoga({
  schema: makeExecutableSchema({
    typeDefs: TypeDefs,
    resolvers: Resolvers
  }),
  context: Contexts
})

const server = createServer(yoga)

export default server
