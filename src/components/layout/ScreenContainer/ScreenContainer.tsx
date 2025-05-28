import React, { FC, ReactNode } from 'react';
import { View, ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  testID: string;
  children: ReactNode;

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
