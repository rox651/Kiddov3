import type { Project } from "../../domain/entities/project";
import { ProjectGraphQLAdapter } from "../../infrastructure/adapters/project/ProjectGraphQLAdapter";
import { ProjectService } from "../../services/project/ProjectService";

export async function GetProjectBySlugUseCase(
  slug: string | undefined,
  projects: Project[],
) {
  const adapter = new ProjectGraphQLAdapter();
  const service = new ProjectService(adapter);
  return service.getProjectBySlug(slug, projects);
}
