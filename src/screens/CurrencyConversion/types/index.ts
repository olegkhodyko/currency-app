import { CurrencyType } from '@_types/props/currency';
import { TextInputProps } from '@_types/props/input';
import { ConvertResult } from '@_types/state/currency';

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
