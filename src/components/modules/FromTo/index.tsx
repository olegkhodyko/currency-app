import { Modules, Ui } from '@components';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface Props {
  testID: string;
}

const FromTo: FC<Props> = ({ testID }) => {
  return (
    <View testID={testID} style={styles.container}>
      <Modules.CurrencySelect
        testID={`${testID}-from`}
        title="From"
        uri="https://flagcdn.com/h40/br.png"
      />

      <TouchableOpacity activeOpacity={0.7} style={styles.switch}>
        <Ui.Icon testID="" type="reverse" size={14} />
      </TouchableOpacity>

      <Modules.CurrencySelect
        testID={`${testID}-to`}
        title="To"
        uri="https://flagcdn.com/h40/us.png"
      />
    </View>
  );
};

export default FromTo;
