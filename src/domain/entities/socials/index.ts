import type { JSX } from "react/jsx-runtime";
import type { ImageMetadata } from "astro";

interface SocialLink {
  name: string;
  url: string;
  Icon: ((_props: astroHTML.JSX.SVGAttributes) => JSX.Element) & ImageMetadata;
}

export type { SocialLink };
