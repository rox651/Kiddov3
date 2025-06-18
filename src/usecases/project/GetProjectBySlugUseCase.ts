import type { Project } from "../../domain/entities/project";
import { createProjectGraphQLRepository } from "../../infrastructure/adapters/project/ProjectGraphQLAdapter";
import { createProjectService } from "../../services/project/ProjectService";

export async function GetProjectBySlugUseCase(slug: string | undefined, projects: Project[]) {
   const repository = createProjectGraphQLRepository();
   const service = createProjectService(repository);
   return service.getProjectBySlug(slug, projects);
}
