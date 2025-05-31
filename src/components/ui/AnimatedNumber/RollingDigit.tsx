import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { TextStyleVariant } from '@_types/props/text';
import { TEXT_STYLES } from '@theme';

import styles from './styles';

interface RollingDigitProps {
  digit: number;
  variant: TextStyleVariant;
}

export const RollingDigit: React.FC<RollingDigitProps> = ({
  digit,
  variant,
}) => {
  const DIGIT_HEIGHT = TEXT_STYLES[variant].fontSize * 1.2;
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  useEffect(() => {
    translateY.value = withTiming(-digit * DIGIT_HEIGHT, { duration: 800 });
  }, [digit]);

  return (
    <View style={[styles.digitContainer, { height: DIGIT_HEIGHT }]}>
      <Animated.View style={animatedStyle}>
        {[...Array(10).keys()].map(n => (
          <Text key={n} style={[TEXT_STYLES[variant]]}>
            {n}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
};
