import { CurrencyType } from '@_types/props/currency';

export const filterCurrencies = (
  currencies: CurrencyType[],
  query: string,
): CurrencyType[] => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return currencies;
  }

  return currencies.filter(curr =>
    [curr.code, curr.name, curr.symbol].some(field =>
      field.toLowerCase().includes(normalizedQuery),
    ),
  );
};
