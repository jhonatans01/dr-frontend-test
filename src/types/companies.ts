export type Category = { id: number; name: string };

type ImageSize = "32x32" | "74x74" | "100x100";

export type Company = {
  uuid: string;
  name: string;
  tagline: string;
  total_jobs_available: number;
  images: Record<ImageSize, string>;
  income_streams: Category[];
  industries: Category[];
};

export type CompanyView = {
  id: string;
  name: string;
  totalJobsAvailable: number;
  images: Record<ImageSize, string>;
  incomeStreams: Category[];
  industries: Category[];
};

export type CompaniesApiResult = {
  items: Company[];
  total: number;
};
