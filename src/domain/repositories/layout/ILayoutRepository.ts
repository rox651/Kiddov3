import type { Menu } from "../../entities/layout/";

interface ILayoutRepository {
  getLayout: () => Promise<Menu>;
}

export type { ILayoutRepository };
