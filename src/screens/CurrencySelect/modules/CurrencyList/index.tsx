import React, { FC, useCallback } from 'react';
import Constants from '@utils/constants';
import { FlatList } from 'react-native';
import { CurrencyType } from '@_types/props/currency';
import {
  CurrencyListItem,
  CurrencyEmptyList,
} from '@screens/CurrencySelect/components';
import { CurrencyListProps } from '@screens/CurrencySelect/types';
import { useCurrencyList } from '@screens/CurrencySelect/hooks';
import styles from './styles';

const CurrencyList: FC<CurrencyListProps> = ({ testID }) => {
  const { onSelect, flatListRef, filteredCurrencies, searchValue } =
    useCurrencyList();

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
      ref={flatListRef}
      testID={testID}
      data={filteredCurrencies}
      renderItem={renderItem}
      keyExtractor={({ id }) => `${id}`}
      style={styles.list}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={24}
      initialNumToRender={24}
      getItemLayout={(_, index) => ({
        length: Constants.Dimensions.SearchItemHeight,
        offset: Constants.Dimensions.SearchItemHeight * index,
        index,
      })}
      ListEmptyComponent={
        searchValue ? <CurrencyEmptyList testID={`${testID}-empty`} /> : null
      }
    />
  );
};

export default CurrencyList;
