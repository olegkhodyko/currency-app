import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { CurrencyType } from '@_types/props/currency';
import {
  CurrencyListItem,
  CurrencyEmptyList,
} from '@screens/CurrencySelect/components';
import { CurrencyListProps } from '@screens/CurrencySelect/types';
import { useCurrencyStore } from '@store/currencyStore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigationProps, TypedRoute } from '@_types/navigation';
import { filterCurrencies } from '@screens/CurrencySelect/utils';
import styles from './styles';

const CurrencyList: FC<CurrencyListProps> = ({ testID }) => {
  const {
    params: { currencies, type },
  } = useRoute<TypedRoute<'CurrencySelect'>>();
  const { goBack } = useNavigation<AppNavigationProps>();

  const changeCurrency = useCurrencyStore(state => state.changeCurrency);
  const resetSearchValue = useCurrencyStore(state => state.resetSearchValue);
  const searchValue = useCurrencyStore(state => state.searchValue);

  const filteredCurrencies = useMemo(() => {
    return filterCurrencies(currencies, searchValue);
  }, [currencies, searchValue]);

  const onSelect = useCallback(
    (currency: CurrencyType) => {
      changeCurrency(currency, type);
      resetSearchValue();
      goBack();
    },
    [type],
  );

  const renderItem = useCallback(
    ({ item }: { item: CurrencyType }) => (
      <CurrencyListItem
        testID={`${testID}-${item.code}`}
        item={item}
        onSelect={onSelect}
      />
    ),
    [onSelect, testID],
  );

  return (
    <FlatList
      testID={testID}
      data={filteredCurrencies}
      renderItem={renderItem}
      keyExtractor={({ id }) => `${id}`}
      style={styles.list}
      contentContainerStyle={[styles.container]}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={15}
      initialNumToRender={15}
      windowSize={21}
      removeClippedSubviews={true}
      ListEmptyComponent={
        searchValue ? <CurrencyEmptyList testID={`${testID}-empty`} /> : null
      }
    />
  );
};

export default CurrencyList;
