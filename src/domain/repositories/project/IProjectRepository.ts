import type { Project, ProjectShowCase } from "../../entities/project/index";

interface IProjectRepository {
   getAllProjects: () => Promise<Project[]>;
   getShowCaseProjects: () => Promise<ProjectShowCase[]>;
   getProjectBySlug: (slug: string | undefined, projects: Project[]) => Project | null;
}

export type { IProjectRepository };
