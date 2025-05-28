import { COLORS, FONTS } from '@theme';
import { PropsWithChildren } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export interface TextComponentProps
  extends Omit<PropsWithChildren<TextProps>, 'style'> {
  variant?: TextStyleVariant;
  color?: ColorType;
  style?: StyleProp<TextStyle>;
}

type TextStyleVariant = keyof typeof TEXT_STYLES;
export type ColorType = keyof typeof COLORS;

export const TEXT_STYLES = {
  medium: {
    fontSize: FONTS.SIZE.medium,
    lineHeight: FONTS.SIZE.medium * 1.2,
    fontWeight: FONTS.WEIGHT.regular,
    fontFamily: 'Roboto-Regular',
  },
  extraLarge: {
    fontSize: FONTS.SIZE.extraLarge,
    lineHeight: FONTS.SIZE.extraLarge * 1.2,
    fontWeight: FONTS.WEIGHT.bold,
    fontFamily: 'Roboto-Regular',
  },
  large: {
    fontSize: FONTS.SIZE.large,
    lineHeight: FONTS.SIZE.large * 1.2,
    fontWeight: FONTS.WEIGHT.bold,
    fontFamily: 'Roboto-Bold',
  },
} as const;
