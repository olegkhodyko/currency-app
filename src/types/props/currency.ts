export type CurrencySelectType = 'from' | 'to';

export interface ConvertCurrencyProps {
  from: string;
  to: string;
  amount: number;
}

export interface CurrencyState {
  activeId: number;
  fromCurrency: CurrencyType;
  toCurrency: CurrencyType;
  amount: number;
  changeAmount: (amount: number) => void;
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
