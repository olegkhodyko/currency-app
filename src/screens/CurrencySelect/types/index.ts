import { CurrencyType } from '@_types/props/currency';

export interface CurrencyItemProps {
  testID: string;
  item: CurrencyType;
  onSelect: (currency: CurrencyType) => void;
}

export interface CurrencyListProps {
  testID: string;
}

export interface CurrencySearchProps {
  testID: string;
}

export interface CurrencyNoResultsProps {
  testID: string;
}
