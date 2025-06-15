import type { Home } from "../../entities/home";

export interface IHomeRepository {
   getHome(): Promise<Home>;
}
