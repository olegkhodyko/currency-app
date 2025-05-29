import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNavigationProps =
  NativeStackNavigationProp<ApplicationStackParamList>;

export type ApplicationStackParamList = {
  CurrencySelect: undefined;
  CurrencyConversion: undefined;
};
