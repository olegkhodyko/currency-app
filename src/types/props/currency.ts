export type CurrencySelectType = 'from' | 'to';

export interface CurrencyState {
  activeId: number;
  fromCurrency: CurrencyType;
  toCurrency: CurrencyType;
  changeCurrency: (currency: CurrencyType, type: CurrencySelectType) => void;
  switchCurrencies: () => void;
  setActiveId: (id: number) => void;
}

export interface CurrencyType {
  id: number;
  symbol: string;
  name: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
  countryCodeISO2: string;
  flagSrc: string;
}
