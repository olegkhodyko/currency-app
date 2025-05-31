import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { RollingDigit } from './RollingDigit';
import { TextStyleVariant } from '@_types/props/text';
import { TEXT_STYLES } from '@theme';

import styles from './styles';

interface AnimatedNumberProps {
  numberString: string;
  variant: TextStyleVariant;
}

const AnimatedNumber: FC<AnimatedNumberProps> = ({ numberString, variant }) => (
  <View style={styles.counterContainer}>
    {numberString.split('').map((char, idx) => {
      if (/\d/.test(char)) {
        return (
          <RollingDigit key={idx} digit={Number(char)} variant={variant} />
        );
      }
      return (
        <Text key={idx} style={[TEXT_STYLES[variant]]}>
          {char}
        </Text>
      );
    })}
  </View>
);

export default AnimatedNumber;
