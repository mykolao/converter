export interface IFeaturedData {
  pairs: string[][];
  values: number[];
}

export interface ICurrency {
  code: string;
  value: number;
}

export interface IGetLatestValuesResponse {
  data: {
    [key: string]: ICurrency;
  };
  meta: {
    last_updated_at: string;
  };
}
