import type { Home, Service } from "../../entities/home";

export interface IHomeService {
  getHome(): Promise<Home>;
  getHomeServices(): Promise<Service[]>;
}
