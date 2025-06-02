import { SplashScreenProps } from '@_types/props/splash';
import { useEffect, useState } from 'react';
import { currencies } from '@store/currencyStore';
import { UseSplashProps } from '@screens/Splash/types';

const useSplash = (
  navigation: SplashScreenProps['navigation'],
): UseSplashProps => {
  const [finished, setFinished] = useState<boolean>(false);

  function onAnimationFinish() {
    setFinished(true);
  }

  useEffect(() => {
    if (finished) {
      navigation.replace('CurrencyConversion', { currencies });
    }
  }, [finished]);

  return {
    onAnimationFinish,
  };
};

export default useSplash;
