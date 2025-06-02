import createIconSet from '@react-native-vector-icons/icomoon';
import icoMoonConfig from '@assets/icons/selection.json';
import { IconProps } from '@_types/props/icons';
import { COLORS } from '@theme';
import { FC } from 'react';

const IcoMoon = createIconSet(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Icon: FC<IconProps> = ({
  type,
  testID,
  color = COLORS.textPrimary,
  size = 12,
}) => <IcoMoon testID={testID} name={type} size={size} color={color} />;

export default Icon;
