import createIconSet from '@react-native-vector-icons/icomoon';
import icoMoonConfig from '@assets/icomoon/selection.json';
import { IconProps } from '@_types/props/icons';
import { COLORS } from '@theme';

const IcoMoon = createIconSet(icoMoonConfig, 'icomoon', 'icomoon.ttf');

export default function Icon({
  type,
  testID,
  color = COLORS.text,
  size = 12,
}: IconProps) {
  return <IcoMoon testID={testID} name={type} size={size} color={color} />;
}
