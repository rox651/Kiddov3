interface NoData {
  data: null;
}

interface Link {
  name: string;
  url: string;
}

interface Cover {
  width: number;
  url: string;
  formats: CoverFormats;
  size: number;
  height: number;
}

interface CoverFormats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}

interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface File {
  height: number;
  url: string;
  width: number;
  size: number;
  formats: PurpleFormats;
}

interface PurpleFormats {
  thumbnail: Large;
  large?: Large;
  medium?: Large;
  small?: Large;
}

interface Category {
  name: string;
}

export type {
  NoData,
  Link,
  Cover,
  CoverFormats,
  Large,
  File,
  PurpleFormats,
  Category,
};
