import { createProjectGraphQLRepository } from "../../infrastructure/adapters/project/ProjectGraphQLAdapter";
import { createProjectService } from "../../services/project/ProjectService";

export async function GetAllProjectsUseCase() {
   const repository = createProjectGraphQLRepository();
   const service = createProjectService(repository);
   return await service.getAllProjects();
}
