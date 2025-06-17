import { ProjectGraphQLAdapter } from "../../infrastructure/adapters/project/ProjectGraphQLAdapter";
import { ProjectService } from "../../services/project/ProjectService";

export async function GetAllProjectsUseCase() {
  const adapter = new ProjectGraphQLAdapter();
  const service = new ProjectService(adapter);
  return await service.getAllProjects();
}
