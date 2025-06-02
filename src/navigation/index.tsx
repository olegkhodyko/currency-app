import React from 'react';
import Screens from '@screens/index';
import config from '@utils/configs/navigation';
import { ApplicationStackParamList } from '@_types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RootStack() {
  const Stack = createNativeStackNavigator<ApplicationStackParamList>();
  const { options } = config;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Screens.Splash}
        options={options.Splash}
      />
      <Stack.Screen
        name="CurrencyConversion"
        component={Screens.CurrencyConversion}
        options={options.CurrencyConversion}
      />
      <Stack.Screen
        name="CurrencySelect"
        component={Screens.CurrencySelect}
        options={options.CurrencySelect}
      />
    </Stack.Navigator>
  );
}
