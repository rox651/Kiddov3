import type { Link, Cover, Category } from "../common";

interface Project {
  title: string;
  case_details: string;
  solution_details: string;
  slug: string;
  cover: Cover;
  categories: Category[];
  content: Content[];
  social_links: Link[];
}

type ProjectShowCase = Omit<
  Project,
  "case_details" | "solution_details" | "categories" | "content"
>;

interface Content {
  file?: Cover;
  body?: string;
  files?: File[];
}

interface QueryProjectsResponse {
  projects: Project[];
}

interface QueryProjectsShowCaseResponse {
  projects: ProjectShowCase[];
}

export type {
  QueryProjectsResponse,
  QueryProjectsShowCaseResponse,
  Project,
  ProjectShowCase,
  Content,
};
