import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
query Query($userId: ID!) {
	getSingleUser(userId: $userId) {
		_id
		username
		email
		password
		savedBooks
	}
}
`

export const GET_ME = gql`
query Me {
	me {
		_id
		username
		email
		password
		savedBooks
	}
  }
`;
