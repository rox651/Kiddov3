import { HomeService } from "../../services/home/HomeService";
import { HomeGraphQLAdapter } from "../../infrastructure/adapters/home/HomeGraphQLAdapter";

export async function GetHomeContentUseCase() {
  const adapter = new HomeGraphQLAdapter();
  const service = new HomeService(adapter);
  return await service.getHome();
}
