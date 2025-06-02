import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { RollingDigit } from './RollingDigit';
import { TEXT_STYLES } from '@theme';
import { isDigit } from '@utils/validators/regex';
import { AnimatedNumberProps } from '@_types/props/components';
import styles from './styles';

const AnimatedNumber: FC<AnimatedNumberProps> = ({
  testID,
  numberString,
  variant = 'extraLarge',
}) => (
  <View style={styles.counterContainer} testID={testID}>
    {numberString.split('').map((char, idx) => {
      if (isDigit(char)) {
        return (
          <RollingDigit
            key={idx}
            digit={Number(char)}
            variant={variant}
            testID={`${testID}-rolling`}
          />
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
