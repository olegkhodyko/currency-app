import React, { FC } from 'react';
import { Ui } from '@components';
import { CurrencySearchProps } from '@screens/CurrencySelect/types/props';

const CurrencySearch: FC<CurrencySearchProps> = ({
  testID,
  searchValue,
  setSearchValue,
}) => (
  <Ui.Input
    testID={`${testID}-search`}
    placeholder="Search currency..."
    value={searchValue}
    onChangeText={setSearchValue}
  />
);

export default CurrencySearch;
