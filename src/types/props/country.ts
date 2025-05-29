export interface CurrencyType {
  name: string;
  symbol: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
  countryCodeISO2: string;
  flagSrc: string;
}

export interface CountyItemProps
  extends Pick<CurrencyType, 'code' | 'flagSrc'> {
  id: number;
}
