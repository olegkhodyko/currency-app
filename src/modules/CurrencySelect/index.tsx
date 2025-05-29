import { Ui } from '@components';
import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '@_types/navigation';
import { CountyItemProps } from '@_types/props/country';

interface CurrencySelectProps {
  testID: string;
  title: string;
  data: CountyItemProps;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ testID, title, data }) => {
  const { flagSrc, code } = data;
  const { navigate } = useNavigation<AppNavigationProps>();

  const handleSelectCurrency = () => {
    navigate('CurrencySelect');
  };

  return (
    <View style={styles.container}>
      <Ui.Text>{`${title}:`}</Ui.Text>

      <TouchableOpacity
        onPress={handleSelectCurrency}
        activeOpacity={0.7}
        testID={testID}
        style={styles.content}>
        <View style={styles.countryData}>
          <Image source={{ uri: flagSrc }} style={styles.image} />
          <Ui.Text>{code.toUpperCase().slice(0, 3)}</Ui.Text>
        </View>
        <Ui.Icon testID="dropdown-icon" type="dropdown" size={12} />
      </TouchableOpacity>
    </View>
  );
};

export default CurrencySelect;
