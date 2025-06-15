import type { Home } from "../../domain/entities/home";
import type { IHomeService } from "../../domain/interfaces/home/IHomeService";
import type { IHomeRepository } from "../../domain/repositories/home/IHomeRepository";

export class HomeService implements IHomeService {
   constructor(private readonly homeRepository: IHomeRepository) {}

   async getHome(): Promise<Home> {
      return this.homeRepository.getHome();
   }
}
