import type { Link } from "../common/";

interface QueryLayoutResponse {
  menu: Menu;
}

interface Menu {
  nav_links: Link[];
  contact_link: Link;
}

export type { QueryLayoutResponse, Menu };
