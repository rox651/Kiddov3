import type { Project } from "../../domain/entities/project";
import type { IProjectService } from "../../domain/interfaces/project/IProjectService";
import type { IProjectRepository } from "../../domain/repositories/project/IProjectRepository";

export class ProjectService implements IProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.getAllProjects();
  }

  getProjectBySlug(
    slug: string | undefined,
    projects: Project[],
  ): Project | null {
    return this.projectRepository.getProjectBySlug(slug, projects);
  }
}
