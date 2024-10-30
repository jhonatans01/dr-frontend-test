import React, { useEffect, useState } from "react";
import { getCompanies, getCompaniesByIndustry } from "../../services/companies";
import { Card } from "../card";
import { IndustryView } from "../../types";

export const IndustriesDashboard = () => {
  const [industries, setIndustries] = useState<IndustryView[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasErrors, setError] = useState<boolean>(false);

  const setIndustriesWithCompanies = async () => {
    const companies = await getCompanies();

    if (companies) {
      const industries = getCompaniesByIndustry(companies);
      setIndustries(industries);
      setError(false);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setIndustriesWithCompanies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasErrors) {
    return <div>Error fetching companies</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-[#ECF1F7]">
      {industries.map((industry) => (
        <Card
          key={industry.id}
          title={industry.name}
          count={industry.companies.length}
          companies={industry.companies}
        ></Card>
      ))}
    </div>
  );
};
