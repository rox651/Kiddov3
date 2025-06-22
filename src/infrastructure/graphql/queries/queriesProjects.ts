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
      cover_for_projects_page {
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

const queryProjectsShowcase = gql`
  query Projects {
    projects(filters: { show_in_project_showcase_section: { eq: true } }) {
      data {
        id
        attributes {
          title
          slug
          show_in_project_showcase_section
          cover {
            data {
              attributes {
                width
                url
                size
                height
                formats
              }
            }
          }
        }
      }
    }
  }
`;

const queryProjectsHeroHome = gql`
  query Projects {
    projects(filters: { show_in_hero_home: { eq: true } }) {
      data {
        id
        attributes {
          title
          slug
          show_in_hero_home
          cover {
            data {
              attributes {
                width
                url
                size
                height
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export { queryProjects, queryProjectsShowcase, queryProjectsHeroHome };
