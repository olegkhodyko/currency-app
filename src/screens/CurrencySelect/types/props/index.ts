import { CurrencyType } from '@_types/props/currency';

export interface CurrencyItemProps {
  testID: string;
  item: CurrencyType;
  onSelect: (currency: CurrencyType) => void;
}

export interface CurrencyListProps {
  testID: string;
  currencies: CurrencyType[];
  onSelect: (currency: CurrencyType) => void;
}

export interface CurrencySearchProps {
  testID: string;
  searchValue: string;
  setSearchValue: (v: string) => void;
}
