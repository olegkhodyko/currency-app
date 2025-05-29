import React, { FC } from 'react';
import { TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native';
import { getInnerStyle, getOuterStyle } from '@utils/helpers/radioButtonStyles';

import styles from './styles';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  selected,
  onPress,
  size = 16,
  style,
  testID,
}) => {
  const outerStyle = getOuterStyle(size);
  const innerStyle = getInnerStyle(size);

  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      activeOpacity={0.7}
      style={[{ width: size, height: size }, style]}>
      <View style={[styles.main, outerStyle]}>
        {selected && <View style={[innerStyle, styles.selected]} />}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
