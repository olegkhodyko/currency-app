import React, { FC, memo } from 'react';
import { Ui } from '@components';
import { CurrencySearchProps } from '@screens/CurrencySelect/types/props';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@theme';

const CurrencySearch: FC<CurrencySearchProps> = memo(
  ({ testID, searchValue, setSearchValue }) => (
    <View
      style={styles.container}>
      <Ui.Icon testID={`${testID}-icon`} type="search" size={16} />
      <Ui.Input
        testID={`${testID}-search`}
        placeholder="Search currency..."
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
      />
    </View>
  ),
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.borderPrimary,
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  input: {
    borderWidth: 0,
    paddingHorizontal: 0,
    flex: 1,
  },
});

export default CurrencySearch;
