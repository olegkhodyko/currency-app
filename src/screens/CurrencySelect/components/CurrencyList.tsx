import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';
import { CurrencyType } from '@_types/props/currency';
import {
  CurrencyItem,
  CurrencyNoResults,
} from '@screens/CurrencySelect/components';
import { CurrencyListProps } from '@screens/CurrencySelect/types/props';

import styles from '../styles';

const CurrencyList: FC<CurrencyListProps> = ({
  testID,
  currencies,
  onSelect,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: CurrencyType }) => (
      <CurrencyItem
        testID={`${testID}-${item.code}`}
        item={item}
        onSelect={onSelect}
      />
    ),
    [onSelect, testID],
  );

  return (
    <FlatList
      ListEmptyComponent={<CurrencyNoResults testID={`${testID}-empty`} />}
      testID={testID}
      data={currencies}
      renderItem={renderItem}
      keyExtractor={({ id }) => id.toString()}
      contentContainerStyle={[styles.containerWrapper]}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CurrencyList;
