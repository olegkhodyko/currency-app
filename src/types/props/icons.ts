const IconTypeEnum = {
  search: 'search',
  dropdown: 'dropdown',
  reverse: 'reverse',
  radio: 'radio',
  'back-arrow': 'back-arrow',
  'radio-checked': 'radio-checked',
} as const;

export interface IconProps {
  type: IconType;
  testID: string;
  color?: string;
  size?: number;
}

export type IconType = (typeof IconTypeEnum)[keyof typeof IconTypeEnum];
