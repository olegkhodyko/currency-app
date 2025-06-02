import React from 'react';
import {
  StatusBar,
  StyleProp,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RootStack from '@navigation/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle} testID="main-app-container">
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootStack />
      </NavigationContainer>
    </View>
  );
}
