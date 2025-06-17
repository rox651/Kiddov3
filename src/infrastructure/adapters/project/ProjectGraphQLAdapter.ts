import type { IProjectRepository } from "../../../domain/repositories/project/IProjectRepository";
import client from "../../graphql/client";
import { queryProjects } from "../../graphql/queries/queriesProjects";
import type {
  Project,
  QueryProjectsResponse,
} from "../../../domain/entities/project";

export class ProjectGraphQLAdapter implements IProjectRepository {
  async getAllProjects(): Promise<Project[]> {
    const result = await client
      .query<QueryProjectsResponse>(queryProjects, {})
      .toPromise();

    if (result.error) {
      throw new Error(`Failed to fetch projects: ${result.error.message}`);
    }

    if (!result.data) {
      throw new Error("No data received from project query");
    }

    return result.data.projects;
  }

  getProjectBySlug(
    slug: string | undefined,
    projects: Project[],
  ): Project | null {
    const data = projects.find((project) => project.slug === slug);

    return data ?? null;
  }
}
