import React from 'react';
import { ApplicationStackParamList } from '@_types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '@screens/index';

export default function RootStack() {
  const Stack = createNativeStackNavigator<ApplicationStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="CurrencyConversion" component={Screens.CurrencyConversion} />
      <Stack.Screen name="CurrencySelect" component={Screens.CurrencySelect} />
    </Stack.Navigator>
  );
}
