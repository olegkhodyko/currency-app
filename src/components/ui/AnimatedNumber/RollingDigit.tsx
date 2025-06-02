import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { View, Text } from 'react-native';
import { useMeasuredHeight, useRollingDigitAnimation } from '@hooks';
import { TEXT_STYLES } from '@theme';
import { RollingDigitProps } from '@_types/props/components';
import styles from './styles';

export const RollingDigit: React.FC<RollingDigitProps> = ({
  digit,
  variant,
}) => {
  const { height, onLayout } = useMeasuredHeight();
  const translateY = useRollingDigitAnimation(digit, height);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={[styles.digitContainer, { height: height || undefined }]}>
      <Text
        style={[TEXT_STYLES[variant], styles.hiddenElement]}
        onLayout={onLayout}>
        0
      </Text>

      {height > 0 && (
        <Animated.View style={animatedStyle}>
          {[...Array(10).keys()].map(n => (
            <Text key={n} style={TEXT_STYLES[variant]}>
              {n}
            </Text>
          ))}
        </Animated.View>
      )}
    </View>
  );
};
