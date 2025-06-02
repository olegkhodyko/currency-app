import React, { FC } from 'react';
import LottieView from 'lottie-react-native';
import { View, Dimensions } from 'react-native';
import { SplashScreenProps } from '@_types/props/splash';
import { useSplash } from '@screens/Splash/hooks';
import styles from './styles';

const SplashScreen: FC<SplashScreenProps> = ({navigation}) => {
  const { onAnimationFinish } = useSplash(navigation);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        source={require('@assets/animations/splashAnimation.json')}
        speed={1.5}
        onAnimationFinish={onAnimationFinish}
        style={{ width: Dimensions.get('screen').width, aspectRatio: 1 / 0.82 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
