const typeDefs = `
  type User {
	_id: ID
	username: String
	email: String
	password: String
	savedBooks: [String]
  }

  type Auth {
	token: ID!
	user: User
  }

  input BookInput {
	
  }

  type Query {
	getSingleUser(userId: ID!): User
	me: Profile
  }

  type Mutation {
	createUser(username: String!, email: String!, password: String!): Auth
	login(email: String!, password: String!): Auth
	saveBook(userId: ID!, bookId: String!): User
	deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
