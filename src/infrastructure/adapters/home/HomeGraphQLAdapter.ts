import { queryHome } from "../../graphql/queries/queryHome";
import type { Home, QueryHomeResponse } from "../../../domain/entities/home";
import type { IHomeRepository } from "../../../domain/repositories/home/IHomeRepository";
import client from "../../graphql/client";

export function createHomeGraphQLRepository(): IHomeRepository {
   return {
      async getHome(): Promise<Home> {
         const result = await client.query<QueryHomeResponse>(queryHome, {}).toPromise();

         if (result.error) {
            throw new Error(`Failed to fetch home data: ${result.error.message}`);
         }

         if (!result.data) {
            throw new Error("No data received from home query");
         }

         return result.data.home;
      },
   };
}
