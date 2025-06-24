import { createHomeService } from "../../services/home/HomeService";
import { createHomeGraphQLRepository } from "../../infrastructure/adapters/home/HomeGraphQLAdapter";

export async function GetHomeServicesUseCase() {
  const repository = createHomeGraphQLRepository();
  const service = createHomeService(repository);
  return await service.getHomeServices();
}
