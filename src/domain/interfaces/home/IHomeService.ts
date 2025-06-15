import type { Home } from "../../entities/home";

export interface IHomeService {
   getHome(): Promise<Home>;
}
