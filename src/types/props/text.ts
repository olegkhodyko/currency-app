import { FONT_SIZES, COLORS } from '@constants/styles';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export interface TextComponentProps extends Omit<TextProps, 'style'> {
  variant?: TextStyleVariant;
  color?: ColorType;
  style?: StyleProp<TextStyle>;
}

type TextStyleVariant = keyof typeof TEXT_STYLES;
type ColorType = keyof typeof COLORS;

export const TEXT_STYLES = {
  medium: {
    fontSize: FONT_SIZES.medium,
    fontFamily: 'Roboto-Regular',
    lineHeight: FONT_SIZES.medium * 1.2,
    fontWeight: 400,
  },
  extraLarge: {
    fontSize: FONT_SIZES.extraLarge,
    fontFamily: 'Roboto-Regular',
    lineHeight: FONT_SIZES.extraLarge * 1.2,
    fontWeight: 400,
  },
  large: {
    fontSize: FONT_SIZES.large,
    fontFamily: 'Roboto-Bold',
    lineHeight: FONT_SIZES.large * 1.2,
    fontWeight: 700,
  },
} as const;
