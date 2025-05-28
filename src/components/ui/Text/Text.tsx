import React, { FC, ReactNode } from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

type FontWeight = 'regular' | 'bold';

interface Props extends TextProps {
  children: ReactNode;
  weight?: FontWeight;
  size?: number;
  color?: string;
}

const Text: FC<Props> = ({
  children,
  weight = 'regular',
  size = 16,
  color = '#000',
  style,
  ...rest
}) => {
  const fontFamily = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  }[weight];

  return (
    <RNText style={[{ fontFamily, fontSize: size, color }, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
