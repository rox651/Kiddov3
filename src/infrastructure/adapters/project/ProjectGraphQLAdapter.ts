import type { IProjectRepository } from "../../../domain/repositories/project/IProjectRepository";
import type {
  Project,
  ProjectShowCase,
  QueryProjectsResponse,
  QueryProjectsShowCaseResponse,
} from "../../../domain/entities/project";

import client from "../../graphql/client";
import {
  queryProjects,
  queryProjectsShowcase,
} from "../../graphql/queries/queriesProjects";

export function createProjectGraphQLRepository(): IProjectRepository {
  const getAllProjects = async (): Promise<Project[]> => {
    const result = await client
      .query<QueryProjectsResponse>(queryProjects, {})
      .toPromise();

    if (result.error) {
      throw new Error(`Failed to fetch projects: ${result.error.message}`);
    }

    if (!result.data) {
      throw new Error("No data received from project query");
    }

    return result.data.projects ?? [];
  };

  const getShowCaseProjects = async (): Promise<ProjectShowCase[]> => {
    const result = await client
      .query<QueryProjectsShowCaseResponse>(queryProjectsShowcase, {})
      .toPromise();

    if (result.error) {
      throw new Error(
        `Failed to fetch showcase projects: ${result.error.message}`,
      );
    }

    if (!result.data) {
      throw new Error("No data received from showcase projects query");
    }

    return result.data.projects ?? [];
  };

  const getProjectBySlug = (
    slug: string | undefined,
    projects: Project[],
  ): Project | null => {
    const data = projects.find((project) => project.slug === slug);
    return data ?? null;
  };

  return {
    getAllProjects,
    getShowCaseProjects,
    getProjectBySlug,
  };
}
