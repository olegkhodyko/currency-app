import React, { FC } from 'react';
import Animated from 'react-native-reanimated';
import { useFadeSlide } from '@screens/CurrencyConversion/hooks';
import { FadeSlideViewProps } from '@screens/CurrencyConversion/types';

const FadeSlideView: FC<FadeSlideViewProps> = ({
  visible,
  style,
  children,
  ...rest
}) => {
  const { animatedStyle } = useFadeSlide({ visible });

  return (
    <Animated.View style={[style, animatedStyle]} {...rest}>
      {children}
    </Animated.View>
  );
};

export default FadeSlideView;
