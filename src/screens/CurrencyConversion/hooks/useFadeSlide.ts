import { useEffect, useState } from 'react';
import {
  UseFadeSlideParams,
  UseFadeSlideProps,
} from '@screens/CurrencyConversion/types';
import {
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function useFadeSlide({
  visible,
  duration = 400,
  slideDistance = 20,
  onAnimationEnd,
}: UseFadeSlideParams): UseFadeSlideProps {
  const [render, setRender] = useState(visible);

  const translateY = useSharedValue(visible ? 0 : -slideDistance);
  const opacity = useSharedValue(visible ? 1 : 0);

  useEffect(() => {
    if (visible) {
      setRender(true);
      translateY.value = withTiming(0, {
        duration,
        easing: Easing.out(Easing.ease),
      });
      opacity.value = withTiming(1, { duration });
    } else {
      translateY.value = withTiming(-slideDistance, { duration });
      opacity.value = withTiming(0, { duration }, () => {
        runOnJS(setRender)(false);
        if (onAnimationEnd) {
          runOnJS(onAnimationEnd)();
        }
      });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return { animatedStyle, render };
}
