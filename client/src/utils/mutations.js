import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
	createUser(username: $username, email: $email, password: $password) {
		token
		user {
			_id
			username
			email
			password
			savedBooks
		}
	}
}
`;

