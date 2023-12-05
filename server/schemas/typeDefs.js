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
	authors: [String]
	description: String
	bookId: String
	image: String
	link: String
	title: String
  }

  type Query {
	getSingleUser(userId: ID!): User
	me: User
  }

  type Mutation {
	createUser(username: String!, email: String!, password: String!): Auth
	login(email: String!, password: String!): Auth
	saveBook(userId: ID!, book: BookInput!): User
	deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
