import { CurrencySelectType, CurrencyType } from '@_types/props/currency';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TypedRoute<T extends keyof ApplicationStackParamList> = RouteProp<
  ApplicationStackParamList,
  T
>;
export type TypedNavigation<T extends keyof ApplicationStackParamList> =
  NativeStackNavigationProp<ApplicationStackParamList, T>;

export type AppNavigationProps =
  NativeStackNavigationProp<ApplicationStackParamList>;

export type ApplicationStackParamList = {
  Splash: undefined;
  CurrencyConversion: CurrencyConversionScreen;
  CurrencySelect: CurrencySelectScreen;
};

interface CurrencyConversionScreen {
  currencies: CurrencyType[];
}

interface CurrencySelectScreen extends CurrencyConversionScreen {
  type: CurrencySelectType;
}

export interface CurrencyConversionScreenProps {
  navigation: TypedNavigation<'CurrencyConversion'>;
  route: TypedRoute<'CurrencyConversion'>;
}
export interface CurrencySelectScreenProps {
  navigation: TypedNavigation<'CurrencySelect'>;
  route: TypedRoute<'CurrencySelect'>;
}
