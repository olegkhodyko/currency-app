import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';
import { CurrencyType } from '@_types/props/currency';
import { CurrencyItem } from '@screens/CurrencySelect/components';
import { CurrencyListProps } from '@screens/CurrencySelect/types/props';
import { Ui } from '@components';

import styles from '../styles';

const CurrencyList: FC<CurrencyListProps> = ({
  testID,
  currencies,
  activeId,
  selectCurrency,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: CurrencyType }) => (
      <CurrencyItem
        testID={`${testID}-${item.code}`}
        item={item}
        isActive={item.id === activeId}
        onSelect={selectCurrency}
      />
    ),
    [activeId, selectCurrency, testID],
  );

  return (
    <FlatList
      ListEmptyComponent={<Ui.Text>No results</Ui.Text>} // create empty component
      testID={testID}
      data={currencies}
      renderItem={renderItem}
      keyExtractor={({ id }) => id.toString()}
      contentContainerStyle={styles.containerWrapper}
      style={styles.listWrapper}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CurrencyList;
