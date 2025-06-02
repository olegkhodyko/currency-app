import { ConvertCurrencyProps, CurrencyType } from '@_types/props/currency';
import { TextInputProps } from '@_types/props/input';
import { UseRequestState } from '@_types/state/api';
import { ConvertResult } from '@_types/state/currency';
import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { useAnimatedStyle } from 'react-native-reanimated';

export interface UseAmountInputProps {
  amount: string;
  handleChange: (text: string) => void;
}

export interface UseConversionResultProps {
  amountTitle: string;
  resultTitle: string;
  visible: boolean;
}

export interface FadeSlideViewProps extends PropsWithChildren<ViewProps> {
  visible: boolean;
  duration?: number;
  slideDistance?: number;
}

export interface UseCurrencyApiProps<T> extends UseRequestState<T> {
  convertCurrency: (params: ConvertCurrencyProps) => Promise<ConvertResult>;
}

export interface UseFadeSlideParams {
  visible: boolean;
  duration?: number;
  slideDistance?: number;
  onAnimationEnd?: () => void;
}

export interface UseFadeSlideProps {
  animatedStyle: ReturnType<typeof useAnimatedStyle>;
  render: boolean;
}

export interface CurrencySwitcherProps {
  testID: string;
}

export interface UseConversionHistoryProps {
  get: (key: string) => ConvertResult | undefined;
  set: (key: string, value: ConvertResult) => Map<string, ConvertResult>;
  has: (key: string) => boolean;
  remove: (key: string) => boolean;
}

export interface UseFromToProps {
  fromCurrency: CurrencyType;
  toCurrency: CurrencyType;
  selectFromCurrency: () => void;
  selectToCurrency: () => void;
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

export interface CurrencyAmountProps extends TextInputProps {
  isLoading: boolean;
  title?: string;
}
export interface AmountInputProps extends Omit<CurrencyAmountProps, 'title'> {}

export interface ConversionResultProps {
  testID: string;
  data: ConvertResult | null;
}
