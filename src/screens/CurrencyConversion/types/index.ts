import { CurrencyType } from '@_types/props/currency';
import { TextInputProps } from '@_types/props/input';
import { ConvertResult } from '@_types/state/currency';

export interface CurrencySwitcherProps {
  testID: string;
}

export interface UseConversionHistoryProps {
  get: (key: string) => ConvertResult | undefined;
  set: (key: string, value: ConvertResult) => Map<string, ConvertResult>;
  has: (key: string) => boolean;
}

export interface UseFetchConversionsProps {
  data: ConvertResult | null;
  isLoading: boolean;
}

export interface FromToProps {
  testID: string;
}

export interface CurrencySelectProps {
  testID: string;
  title: string;
  currency: CurrencyType;
  selectCurrency: () => void;
}

export interface AmountInputProps extends TextInputProps {
  title: string;
}

export interface ConversionResultProps {
  testID: string;
  data: ConvertResult;
}
