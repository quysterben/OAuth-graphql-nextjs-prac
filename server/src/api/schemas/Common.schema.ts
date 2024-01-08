export const CommonSchema = /* GraphQL */ `
  type Mutation {
    login(input: LoginInput!): LoginPayload!
    register(input: RegisterInput!): RegisterPayload!

    refreshToken: String!
  }

  # Login
  input LoginInput {
    email: String!
    password: String!
  }
  type LoginPayload {
    accessToken: String!
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

  type User {
    _id: ID!
    role: String!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
`
