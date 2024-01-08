interface Database {
  mongoose: typeof mongoose
  User: typeof User
  Key: typeof Key
}

interface Context {
  db: Database
  user: User
}

interface JwtPayload {
  userId: string
  role: string
}

interface User {
  id: string
  email: string
  password: string
  role: string
  createdAt: string
  updatedAt: string
}
