import { CurrencyType } from '@_types/props/currency';
import { TextInputProps } from '@_types/props/input';

export interface FromToProps {
  testID: string;
  currencies: CurrencyType[];
}

export interface CurrencySelectProps {
  testID: string;
  title: string;
  data: CurrencyType;
  selectCurrency: () => void;
}

export interface AmountInputProps extends TextInputProps {
  title: string;
}
