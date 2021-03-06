export type Country = {
  name: string;
  population: string;
  capital: string;
  flag: {
    svgFile: string;
  };
  subregion: {
    region: {
      name: string;
    };
  };
};
export type SubRegion = {
  countries: Array<Country>;
};
export type Region = {
  _id: string;
  name: string;
  subregions: Array<SubRegion>;
};
export type IRegions = {
  Region: Region[];
};

export type ICountries = {
  Country: Country[];
};

export type State = {
  loading: boolean;
  regions: Region[];
  selectedRegion?: Region;
  countryList: Country[];
};
