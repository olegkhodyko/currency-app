import { COLORS } from '@theme';
import React, { FC, PropsWithChildren } from 'react';
import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends PropsWithChildren<ViewProps> {
  testID: string;
}

const ScreenContainer: FC<Props> = ({ testID, children, style, ...rest }) => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle: ViewStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingHorizontal: Math.max(insets.left, insets.right),
    backgroundColor: COLORS.backgroundPrimary,
    overflow: 'hidden',
  };

  return (
    <View
      testID={testID}
      style={[safeAreaStyle, StyleSheet.flatten(style)]}
      {...rest}>
      {children}
    </View>
  );
};

export default ScreenContainer;
