import { Ui } from '@components';
import React, { FC } from 'react';
import { CurrencySearchProps } from '@screens/CurrencySelect/types/props';

const CurrencySearch: FC<CurrencySearchProps> = ({
  testID,
  searchValue,
  setSearchValue,
}) => {
  return (
    <Ui.Input
      testID={`${testID}-search`}
      placeholder="Search currency..."
      keyboardType="web-search"
      value={searchValue}
      onChangeText={setSearchValue}
    />
  );
};

export default CurrencySearch;
