import type { IHomeService } from "../../domain/interfaces/home/IHomeService";
import type { IHomeRepository } from "../../domain/repositories/home/IHomeRepository";

export function createHomeService(
  homeRepository: IHomeRepository,
): IHomeService {
  return {
    getHome: () => homeRepository.getHome(),
    getHomeServices: () => homeRepository.getHomeServices(),
  };
}
