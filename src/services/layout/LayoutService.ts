import type { Menu } from "../../domain/entities/layout/";
import type { ILayoutService } from "../../domain/interfaces/layout/ILayoutService";
import type { ILayoutRepository } from "../../domain/repositories/layout/ILayoutRepository";

export function createLayoutService(layoutRepository: ILayoutRepository): ILayoutService {
   return {
      getLayout: () => layoutRepository.getLayout(),
   };
}
