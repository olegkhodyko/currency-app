import { Ui } from '@components';
import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface CurrencySelectProps {
  testID: string;
  title: string;
  uri: string;
}

const CurrencySelect: FC<CurrencySelectProps> = ({
  testID,
  title,
  uri = 'https://flagcdn.com/h40/br.png',
}) => {
  return (
    <View style={styles.container}>
      <Ui.Text>{`${title}:`}</Ui.Text>

      <TouchableOpacity
        activeOpacity={0.7}
        testID={testID}
        style={styles.content}>
        <View style={styles.countryData}>
          <Image source={{ uri }} style={styles.image} />
          <Ui.Text>USD</Ui.Text>
        </View>
        <Ui.Icon testID="dropdown-icon" type="dropdown" size={12} />
      </TouchableOpacity>
    </View>
  );
};

export default CurrencySelect;
