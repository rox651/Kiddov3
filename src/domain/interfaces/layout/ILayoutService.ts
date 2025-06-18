import type { Menu } from "../../entities/layout/";

interface ILayoutService {
  getLayout: () => Promise<Menu>;
}

export type { ILayoutService };
