import { gql } from "urql";

const queryHome = gql`
  query Home {
    home {
      about
      what_we_are {
        title
        text
      }
      what_we_do {
        text
      }
    }
  }
`;

const queryHomeServices = gql`
  query HomeServices {
    services {
      title
      content
      categories {
        name
      }
    }
  }
`;

export { queryHome, queryHomeServices };
