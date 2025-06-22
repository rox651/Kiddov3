import { gql } from "urql";

const queryLayout = gql`
  query Layout {
    menu {
      nav_links {
        name
        url
      }
      contact_link {
        name
        url
      }
    }
  }
`;

export { queryLayout };
