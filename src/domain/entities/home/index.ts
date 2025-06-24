export type { Category } from "../common/";

export interface WhatWeAre {
  title: string;
  text: string;
}

export interface WhatWeDo {
  text: string;
}

export interface Home {
  about: string;
  what_we_are: WhatWeAre;
  what_we_do: WhatWeDo;
}

export interface Service {
  title: string;
  content: string;
  categories: Category[];
}

export type QueryHomeServicesResponse = {
  services: Service[];
};

export type QueryHomeResponse = {
  home: Home;
};
