import React from 'react';
import {ApplicationStackParamList} from '../types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';

export default function RootStack() {
  const Stack = createNativeStackNavigator<ApplicationStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
