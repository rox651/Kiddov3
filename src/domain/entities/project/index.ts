interface Project {
   title: string;
   case_details: string;
   solution_details: string;
   slug: string;
   cover: Cover;
   categories: Category[];
   content: Content[];
}

type ProjectShowCase = Omit<
   Project,
   "case_details" | "solution_details" | "categories" | "content"
>;

interface Category {
   name: string;
}

interface Content {
   file?: Cover;
   body?: string;
   files?: File[];
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

interface QueryProjectsResponse {
   projects: Project[];
}

interface QueryProjectsShowCaseResponse {
   projects: ProjectShowCase[];
}

export type {
   QueryProjectsResponse,
   QueryProjectsShowCaseResponse,
   Project,
   ProjectShowCase,
   Category,
   Content,
   Cover,
   CoverFormats,
   Large,
   File,
   PurpleFormats,
};
