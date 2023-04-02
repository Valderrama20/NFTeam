import { gql } from '@apollo/client';

//Las querys para crear y obtener la informacion del usuario de CEDALIO

export const GET_USER = gql`
  query GetUSER {
    allUserDatas {
      id
      fullname
      email
      type
      status
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $id: UUID!
    $fullname: String!
    $email: String!
    $type: String!
    $status: String
  ) {
    createUser(
      user: {
        id: $id
        email: $email
        fullname: $fullname
        type: $type
        status: $status
      }
    ) {
      user {
        id
        email
        type
        status
      }
    }
  }
`;
