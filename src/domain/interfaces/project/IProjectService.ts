import type { Project } from "../../entities/project/index";

interface IProjectService {
  getAllProjects: () => Promise<Project[]>;
}

export type { IProjectService };
