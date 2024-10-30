import {
  CompaniesApiResult,
  CompanyView,
  IndustryMap,
  IndustryView,
} from "../types";

const parseCompaniesData = (companyData: CompaniesApiResult): CompanyView[] =>
  companyData.items.map((company) => ({
    id: company.uuid,
    name: company.name,
    totalJobsAvailable: company.total_jobs_available,
    images: company.images,
    incomeStreams: company.income_streams,
    industries: company.industries,
  }));

export const getCompaniesByIndustry = (
  companies: CompanyView[]
): IndustryView[] => {
  const industries: IndustryMap = {};
  for (const company of companies) {
    company.industries.forEach((industry) => {
      if (!industries[industry.id]) {
        industries[industry.id] = { name: industry.name, companies: new Map() };
      }

      industries[industry.id].companies.set(company.id, company);
    });
  }

  return Object.entries(industries).map(([id, industry]) => ({
    id,
    name: industry.name,
    companies: Array.from(industry.companies.values()),
  }));
};

export const getCompanies = async (): Promise<CompanyView[] | undefined> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_HOST}/companies`
    );

    const data: CompaniesApiResult = await response.json();
    return parseCompaniesData(data);
  } catch (error) {
    console.error(error);
  }
};
