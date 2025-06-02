import { useEffect } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import Constants from '@utils/constants';

export default function useRollingDigitAnimation(
  digit: number,
  digitHeight: number,
) {
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (digitHeight > 0) {
      translateY.value = withTiming(-digit * digitHeight, {
        duration: Constants.DefaultAnimationDelay,
      });
    }
  }, [digit, digitHeight]);

  return translateY;
}
