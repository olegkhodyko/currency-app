import { create } from 'zustand';
import { CurrencyType } from '@_types/props/currency';
import { CurrencyArraySchema } from '@utils/validators/currency';
import rawData from '@assets/data/currencies.json';

const result = CurrencyArraySchema.safeParse(
  rawData.map((i, idx) => ({ ...i, id: idx + 1 })),
);

if (!result.success) {
  throw new Error('Invalid currency data: ' + result.error.message);
}

export const currency: CurrencyType[] = result.data;

interface CurrencyState {
  fromCurrency: CurrencyType;
  toCurrency: CurrencyType;
  setFromCurrency: (currency: CurrencyType) => void;
  setToCurrency: (currency: CurrencyType) => void;
  switchCurrencies: () => void;
}

export const useCurrencyStore = create<CurrencyState>((set, get) => ({
  fromCurrency: currency[0],
  toCurrency: currency[1],
  setFromCurrency: (_currency: CurrencyType) =>
    set({ fromCurrency: _currency }),
  setToCurrency: (_currency: CurrencyType) => set({ toCurrency: _currency }),
  switchCurrencies: () => {
    const { fromCurrency, toCurrency } = get();
    set({ fromCurrency: toCurrency, toCurrency: fromCurrency });
  },
}));
