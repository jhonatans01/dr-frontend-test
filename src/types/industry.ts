import { CompanyView } from "./companies";

export type IndustryView = {
  id: string;
  name: string;
  companies: CompanyView[];
};

export type IndustryMap = {
  [key: number]: { name: string; companies: Map<string, CompanyView> };
};
