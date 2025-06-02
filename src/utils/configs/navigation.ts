import { ApplicationStackParamList } from '@_types/navigation';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { TEXT_STYLES } from '@theme';

const options: Record<
  keyof ApplicationStackParamList,
  NativeStackNavigationOptions
> = {
  Splash: {
    headerShown: false,
  },
  CurrencySelect: {
    title: 'Currency Select',
    headerTitleStyle: TEXT_STYLES.large,
    headerShown: true,
  },
  CurrencyConversion: {
    headerShown: false,
  },
} as const;

export default {
  options,
};
