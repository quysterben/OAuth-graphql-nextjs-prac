import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 4000

import server from './api/server'

process.on('uncaughtException', (err) => {
  console.error(`${new Date().toUTCString()} uncaughtException:`, err)
  process.exit(0)
})

process.on('unhandledRejection', (err) => {
  console.error(`${new Date().toUTCString()} unhandledRejection:`, err)
})

server.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}/api`))
