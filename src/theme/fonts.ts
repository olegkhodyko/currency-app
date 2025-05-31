const SIZE = {
  medium: 16,
  large: 20,
  extraLarge: 42,
} as const;

const WEIGHT = {
  regular: '400',
  bold: '700',
} as const;

const FAMILY = {
  ROBOTO_REGULAR: 'Roboto-Regular',
  ROBOTO_BOLD: 'Roboto-Bold',
} as const;

export default { SIZE, WEIGHT, FAMILY };
