import { Ui } from '@components';
import { CurrencySelect } from '@screens/CurrencyConversion/modules';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CurrencyType } from '@_types/props/currency';
import { FromToProps } from '@screens/CurrencyConversion/types';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '@_types/navigation';

import styles from './styles';

const FromTo: FC<FromToProps> = ({ testID, currencies }) => {
  const { navigate } = useNavigation<AppNavigationProps>();

  const [data, setData] = useState<[CurrencyType, CurrencyType]>([
    currencies[0],
    currencies[1],
  ]);

  useEffect(() => {
    setData([currencies[0], currencies[1]]);
  }, [currencies]);

  const selectCurrency = useCallback(() => {
    navigate('CurrencySelect', { currencies });
  }, [navigate, currencies]);

  const handleSwitch = () => {
    setData(([from, to]) => [to, from]);
  };

  return (
    <View testID={testID} style={styles.container}>
      <CurrencySelect
        testID={`${testID}-from`}
        title="From"
        data={data[0]}
        selectCurrency={selectCurrency}
      />

      <TouchableOpacity
        testID={`${testID}-switch`}
        style={styles.switch}
        onPress={handleSwitch}>
        <Ui.Icon testID="" type="reverse" size={16} />
      </TouchableOpacity>

      <CurrencySelect
        testID={`${testID}-to`}
        title="To"
        data={data[1]}
        selectCurrency={selectCurrency}
      />
    </View>
  );
};

export default FromTo;
