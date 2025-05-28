import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  testID: string;
  title: string;
}

const Button: FC<Props> = ({ testID, title, ...rest }) => {
  return (
    <TouchableOpacity testID={testID} style={styles.container} {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
