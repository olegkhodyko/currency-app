import React from 'react';
import Screens from '@screens/index';
import { ApplicationStackParamList } from '@_types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TEXT_STYLES } from '@theme';

export default function RootStack() {
  const Stack = createNativeStackNavigator<ApplicationStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CurrencyConversion"
        component={Screens.CurrencyConversion}
      />
      <Stack.Screen
        options={{
          title: 'Currency Select',
          headerTitleStyle: TEXT_STYLES.large,
        }}
        name="CurrencySelect"
        component={Screens.CurrencySelect}
      />
    </Stack.Navigator>
  );
}
