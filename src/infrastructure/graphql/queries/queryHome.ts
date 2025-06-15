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
            footer
         }
      }
   }
`;

export { queryHome };
