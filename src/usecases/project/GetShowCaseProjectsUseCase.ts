import { createProjectGraphQLRepository } from "../../infrastructure/adapters/project/ProjectGraphQLAdapter";
import { createProjectService } from "../../services/project/ProjectService";

export async function GetShowCaseProjectsUseCase() {
   const repository = createProjectGraphQLRepository();
   const service = createProjectService(repository);
   return service.getShowCaseProjects();
}
