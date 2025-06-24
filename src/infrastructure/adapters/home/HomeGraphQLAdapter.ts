import { queryHome, queryHomeServices } from "../../graphql/queries/queryHome";
import type {
  Home,
  Service,
  QueryHomeServicesResponse,
  QueryHomeResponse,
} from "../../../domain/entities/home";
import type { IHomeRepository } from "../../../domain/repositories/home/IHomeRepository";
import client from "../../graphql/client";

export function createHomeGraphQLRepository(): IHomeRepository {
  return {
    async getHome(): Promise<Home> {
      const result = await client
        .query<QueryHomeResponse>(queryHome, {})
        .toPromise();

      if (result.error) {
        throw new Error(`Failed to fetch home data: ${result.error.message}`);
      }

      if (!result.data) {
        throw new Error("No data received from home query");
      }

      return result.data.home;
    },

    async getHomeServices(): Promise<Service[]> {
      const result = await client
        .query<QueryHomeServicesResponse>(queryHomeServices, {})
        .toPromise();

      if (result.error) {
        throw new Error(
          `Failed to fetch home services data: ${result.error.message}`,
        );
      }

      if (!result.data) {
        throw new Error("No data received from home services query");
      }

      return result.data.services;
    },
  };
}
