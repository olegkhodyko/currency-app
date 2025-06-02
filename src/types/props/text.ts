import { COLORS, TEXT_STYLES } from '@theme';
import { PropsWithChildren } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export interface TextComponentProps
  extends Omit<PropsWithChildren<TextProps>, 'style'> {
  variant?: TextStyleVariant;
  color?: ColorType;
  style?: StyleProp<TextStyle>;
}

export type TextStyleVariant = keyof typeof TEXT_STYLES;
export type ColorType = keyof typeof COLORS;
