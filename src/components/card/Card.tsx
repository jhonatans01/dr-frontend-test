import React from "react";
import { CompanyView } from "../../types/companies";

type Props = {
  title: string;
  count: number;
  companies: CompanyView[];
};

const CardItem = ({ name, images, totalJobsAvailable }: CompanyView) => {
  const imgUrl = images["32x32"];

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center text-sm">
        <img
          alt={`${name} logo`}
          width={"24px"}
          className="mr-1.5 rounded-sm"
          src={imgUrl}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `${process.env.PUBLIC_URL}/company_placeholder.svg`;
          }}
        />
        <span>{name}</span>
      </div>
      <span className="text-color-secondary">{totalJobsAvailable}</span>
    </div>
  );
};

export const Card = ({ title, count, companies }: Props) => {
  return (
    <div className="shadow-md rounded-md px-4 py-6 bg-white	text-color-primary">
      <div className="flex font-semibold justify-between mb-4 text-base">
        <h1 className="first-letter:uppercase">{title}</h1>
        <h1>{count}</h1>
      </div>
      <div className="flex justify-between text-color-secondary text-xs">
        <span>Name</span>
        <span>Total jobs available</span>
      </div>
      <hr className="my-2 h-0.5 text-neutral-200	" />
      {companies.map((company) => (
        <CardItem key={company.id} {...company} />
      ))}
    </div>
  );
};
