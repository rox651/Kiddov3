import { gql } from "urql";

const queryProjects = gql`
  query Projects {
    projects {
      title
      case_details
      solution_details
      cover {
        width
        url
        size
        height
        formats
      }
      categories {
        name
      }
      slug
      content {
        ... on ComponentSharedRichText {
          body
        }
        ... on ComponentSharedSlider {
          files {
            height
            url
            width
            size
            formats
          }
        }
        ... on ComponentSharedMedia {
          file {
            width
            url
            formats
            size
            height
          }
        }
      }
    }
  }
`;

export { queryProjects };
