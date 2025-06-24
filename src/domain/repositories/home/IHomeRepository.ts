import type { Home, Service } from "../../entities/home";

export interface IHomeRepository {
  getHome(): Promise<Home>;
  getHomeServices(): Promise<Service[]>;
}
