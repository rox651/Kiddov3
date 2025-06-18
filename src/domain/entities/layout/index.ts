interface QueryLayoutResponse {
  menu: Menu;
}

interface Menu {
  nav_links: Link[];
  contact_link: Link;
}

interface Link {
  name: string;
  url: string;
}

export type { QueryLayoutResponse, Menu, Link };
