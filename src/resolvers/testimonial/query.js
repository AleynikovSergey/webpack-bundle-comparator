import { gql } from '@apollo/client';

export const TESTIMONIAL = gql`
  query TESTIMONIAL {
    testimonial {
      id
      name
      image
      description
      position
    }
  }
`;
