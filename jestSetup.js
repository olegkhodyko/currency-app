import 'react-native-reanimated/mock';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.useAnimatedStyle = () => {
    return {};
  };

  return Reanimated;
});
