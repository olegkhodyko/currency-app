import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';
import { COLORS } from '@theme';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator color={COLORS.white} size={30} />
  </View>
);

export default Loader;
