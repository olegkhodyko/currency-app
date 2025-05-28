import React, { FC } from 'react';
import { Text as RNText } from 'react-native';
import { TEXT_STYLES, TextComponentProps } from '@_types/props/text';

export const Text: FC<TextComponentProps> = ({
  variant = 'medium',
  color = 'text',
  children,
  style,
  ...props
}) => {
  return (
    <RNText
      style={[TEXT_STYLES[variant], color ? { color } : {}, style]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
