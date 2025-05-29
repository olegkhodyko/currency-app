import { CurrencyType } from '@_types/props/currency';

export interface CurrencyItemProps {
  testID: string;
  item: CurrencyType;
  isActive: boolean;
  onSelect: (code: CurrencyType['id']) => void;
}

export interface CurrencyListProps {
  testID: string;
  currencies: CurrencyType[];
  activeId: CurrencyType['id'];
  selectCurrency: (code: CurrencyType['id']) => void;
}

export interface CurrencySearchProps {
  testID: string;
  searchValue: string;
  setSearchValue: (v: string) => void;
}
