import type { ILayoutRepository } from "../../../domain/repositories/layout/ILayoutRepository";
import client from "../../graphql/client";
import { queryLayout } from "../../graphql/queries/queryLayout.ts";
import type { Menu, QueryLayoutResponse } from "../../../domain/entities/layout/";

export function createLayoutGraphQLRepository(): ILayoutRepository {
   return {
      async getLayout(): Promise<Menu> {
         const result = await client.query<QueryLayoutResponse>(queryLayout, {}).toPromise();

         if (result.error) {
            throw new Error(`Failed to fetch layout: ${result.error.message}`);
         }

         if (!result.data) {
            throw new Error("No data received from layout query");
         }

         return result.data.menu;
      },
   };
}
