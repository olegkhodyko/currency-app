import React, { FC } from 'react';
import { View } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import IcomoonConfig from '@/assets/icomoon/selection.json';

export interface IIconProps {
  name: string;
  testID: string;
  color?: string;
  size?: number;
}

const Icomoon = createIconSetFromIcoMoon(
  IcomoonConfig,
  'icomoon',
  'icomoon.ttf',
);

const Icon: FC<IIconProps> = ({ name, testID, color = 'black', size = 10 }) => {
  return (
    <View testID={testID}>
      <Icomoon name={name} color={color} size={size} />
    </View>
  );
};

export default Icon;
