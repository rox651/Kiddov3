import { createLayoutService } from "../../services/layout/LayoutService";
import { createLayoutGraphQLRepository } from "../../infrastructure/adapters/layout/LayoutGraphQLAdapter";

export async function GetLayoutUseCase() {
   const repository = createLayoutGraphQLRepository();
   const service = createLayoutService(repository);
   return await service.getLayout();
}
