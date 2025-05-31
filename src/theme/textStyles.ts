import FONTS from './fonts';

export default {
  medium: {
    fontSize: FONTS.SIZE.medium,
    lineHeight: FONTS.SIZE.medium * 1.2,
    fontWeight: FONTS.WEIGHT.regular,
    fontFamily: FONTS.FAMILY.ROBOTO_REGULAR,
  },
  extraLarge: {
    fontSize: FONTS.SIZE.extraLarge,
    lineHeight: FONTS.SIZE.extraLarge * 1.2,
    fontWeight: FONTS.WEIGHT.regular,
    fontFamily: FONTS.FAMILY.ROBOTO_REGULAR,
  },
  large: {
    fontSize: FONTS.SIZE.large,
    lineHeight: FONTS.SIZE.large * 1.2,
    fontWeight: FONTS.WEIGHT.bold,
    fontFamily: FONTS.FAMILY.ROBOTO_BOLD,
  },
} as const;
