import { CurrencyType } from '@_types/props/currency';
import { FlatList } from 'react-native';

export interface UseCurrencySearchProps {
  value: string;
  onChangeText: (text: string) => void;
}

export interface UseCurrencyListProps {
  onSelect: (currency: CurrencyType) => void;
  flatListRef: React.RefObject<FlatList<CurrencyType> | null>;
  filteredCurrencies: CurrencyType[];
  searchValue: string;
}

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

export interface CurrencyEmptyListProps {
  testID: string;
}
