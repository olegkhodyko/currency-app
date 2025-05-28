import React, { FC, PropsWithChildren } from 'react';
import { View, ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends PropsWithChildren<ViewProps> {
  testID: string;
}

const ScreenContainer: FC<Props> = ({ testID, children, style, ...rest }) => {
  const insets = useSafeAreaInsets();

  const containerStyle: StyleProp<ViewStyle> = [
    {
      flex: 1,
      paddingTop: insets.top,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      overflow: 'hidden',
    },
    style,
  ];

  return (
    <View testID={testID} style={containerStyle} {...rest}>
      {children}
    </View>
  );
};

export default ScreenContainer;
