export type Link = {
  id: string;
  title: string;
};

export type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Statistic = {
  value: string;
  title: string;
};

export type Pricing = {
  type: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  discountYearlyPrice: number;
  features: string[];
};
