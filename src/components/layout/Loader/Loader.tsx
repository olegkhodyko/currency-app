import { Ui } from '@components';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ui.Text>Loading...</Ui.Text>
      </View>
    </View>
  );
};

export default Loader;
