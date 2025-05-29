import React, { FC } from 'react';
import { Image, ImageProps, ImageStyle, StyleProp } from 'react-native';

interface FlagImageProps extends Partial<ImageProps> {
  uri: string;
  size: number;
  style?: StyleProp<ImageStyle>;
}

const FlagImage: FC<FlagImageProps> = ({ uri, size, style, ...rest }) => {
  const dynamicStyle: StyleProp<ImageStyle> = {
    width: size,
    height: size / 1.5,
    borderRadius: size * 0.15,
    borderWidth: 1,
  };

  return (
    <Image
      alt=""
      source={{ uri }}
      style={[dynamicStyle, style]}
      resizeMode="cover"
      {...rest}
    />
  );
};

export default FlagImage;
