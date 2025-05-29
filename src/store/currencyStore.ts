import { create } from 'zustand';
import { CurrencyState, CurrencyType } from '@_types/props/currency';
import { CurrencyArraySchema } from '@utils/validators/currency';
import rawData from '@assets/data/currencies.json';

const result = CurrencyArraySchema.safeParse(
  rawData.map((i, idx) => ({ ...i, id: idx + 1 })),
);

if (!result.success) {
  throw new Error('Invalid currency data: ' + result.error.message);
}

export const currencies: CurrencyType[] = result.data;

export const useCurrencyStore = create<CurrencyState>(
  (set, get): CurrencyState => ({
    activeId: -1,
    fromCurrency: currencies[0],
    toCurrency: currencies[1],

    setActiveId: (id: CurrencyType['id']) => {
      set({ activeId: id });
    },

    changeCurrency: (currency, type) => {
      const newState: Partial<CurrencyState> = {
        activeId: currency.id,
        ...(type === 'from'
          ? { fromCurrency: currency }
          : { toCurrency: currency }),
      };
      set(newState);
    },

    switchCurrencies: () => {
      const { fromCurrency, toCurrency } = get();
      set({ fromCurrency: toCurrency, toCurrency: fromCurrency });
    },
  }),
);
