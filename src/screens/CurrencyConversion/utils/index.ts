import { ConvertResult } from '@_types/state/currency';
import dayjs from 'dayjs';

export const isExpiredTime = (dateString: string, ttlMinutes: number) => {
  return dayjs().diff(dayjs(dateString), 'minute') > ttlMinutes;
};

export const recalculateResult = (
  cached: ConvertResult,
  newAmount: number,
): ConvertResult => {
  return {
    ...cached,
    query: {
      ...cached.query,
      amount: newAmount,
    },
    result: cached.info.rate * newAmount,
  };
};
export const formatCurrency = (
  value: number,
  currencySymbol: string = '',
  decimalPlaces: number = 2,
): string => {
  if (isNaN(value)) {
    return `${currencySymbol}0.00`;
  }

  return `${currencySymbol}${value.toFixed(decimalPlaces)}`;
};
