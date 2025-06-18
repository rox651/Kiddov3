import type { IProjectService } from "../../domain/interfaces/project/IProjectService";
import type { IProjectRepository } from "../../domain/repositories/project/IProjectRepository";

export function createProjectService(projectRepository: IProjectRepository): IProjectService {
   return {
      getAllProjects: () => projectRepository.getAllProjects(),
      getShowCaseProjects: async () => projectRepository.getShowCaseProjects(),
      getProjectBySlug: (slug, projects) => projectRepository.getProjectBySlug(slug, projects),
   };
}
