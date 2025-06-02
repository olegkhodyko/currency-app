import { ViewStyle } from 'react-native';

export const getOuterStyle = (size: number): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
});

export const getInnerStyle = (size: number): ViewStyle => ({
  width: size * 0.5,
  height: size * 0.5,
  borderRadius: size * 0.25,
});
