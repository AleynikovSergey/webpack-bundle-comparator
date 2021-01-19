import { gql } from '@apollo/client';

export const SKILL = gql`
  query SKILL {
    skill {
      id
      name
      image
    }
  }
`;
