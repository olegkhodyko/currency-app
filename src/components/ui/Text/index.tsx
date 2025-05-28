import React, { FC } from 'react';
import { Text as RNText } from 'react-native';
import { TEXT_STYLES, TextComponentProps } from '@_types/props/text';
import { COLORS } from '@theme';

export const Text: FC<TextComponentProps> = ({
  children,
  variant = 'medium',
  color = 'text',
  style,
  ...props
}) => {
  const resolvedStyle = [
    TEXT_STYLES[variant] ?? TEXT_STYLES.medium,
    color && COLORS[color] ? { color: COLORS[color] } : {},
    style,
  ];

  return (
    <RNText style={resolvedStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
