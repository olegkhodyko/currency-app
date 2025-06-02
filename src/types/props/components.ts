import { TextStyleVariant } from './text';

export interface AnimatedNumberProps {
  testID: string;
  numberString: string;
  variant?: TextStyleVariant;
}

export interface RollingDigitProps {
  testID: string;
  digit: number;
  variant: TextStyleVariant;
}
