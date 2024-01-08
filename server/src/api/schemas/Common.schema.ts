export const CommonSchema = /* GraphQL */ `
  type Mutation {
    login(input: LoginInput!): LoginPayload!
    register(input: RegisterInput!): RegisterPayload!
    refreshToken(refreshToken: String!): RefreshTokenPayload!
  }

  # Login
  input LoginInput {
    email: String!
    password: String!
  }
  type LoginPayload {
    accessToken: String!
    refreshToken: String!
    user: User!
  }

  # Register
  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }
  type RegisterPayload {
    user: User!
  }

  # Refresh Token
  type RefreshTokenPayload {
    accessToken: String!
  }

  type User {
    _id: ID!
    role: String!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
`
