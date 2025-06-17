import type { Project } from "../../entities/project/index";

interface IProjectRepository {
  getAllProjects: () => Promise<Project[]>;
  getProjectBySlug: (
    slug: string | undefined,
    projects: Project[],
  ) => Project | null;
}

export type { IProjectRepository };
