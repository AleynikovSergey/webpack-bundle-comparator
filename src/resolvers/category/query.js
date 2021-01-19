import { gql } from '@apollo/client';

export const CATEGORY = gql`
  query CATEGORY {
    category {
      id
      name
      image
      statics
    }
  }
`;
