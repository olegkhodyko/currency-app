import { CurrencySelectType, CurrencyType } from '@_types/props/currency';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TypedRoute<T extends keyof ApplicationStackParamList> = RouteProp<
  ApplicationStackParamList,
  T
>;

export type AppNavigationProps =
  NativeStackNavigationProp<ApplicationStackParamList>;

export type ApplicationStackParamList = {
  CurrencyConversion: undefined;
  CurrencySelect: {
    currencies: CurrencyType[];
    type: CurrencySelectType;
  };
};
