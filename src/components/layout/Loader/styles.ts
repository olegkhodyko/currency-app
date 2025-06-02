import { COLORS } from '@theme';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.loadingBackground,
    zIndex: 1,
  },
});
