import React, { FC } from 'react';
import { Ui } from '@components';
import { TouchableOpacity, View, ViewProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '@_types/navigation';

import styles from './styles';

interface NavigationHeaderProps extends ViewProps {
  title: string;
}

const NavigationHeader: FC<NavigationHeaderProps> = ({ title, ...rest }) => {
  const { goBack } = useNavigation<AppNavigationProps>();
  return (
    <View style={styles.container} {...rest}>
      <TouchableOpacity onPress={goBack}>
        <Ui.Icon type="back-arrow" size={16} testID="" />
      </TouchableOpacity>

      <Ui.Text variant="large">{title}</Ui.Text>
    </View>
  );
};

export default NavigationHeader;
