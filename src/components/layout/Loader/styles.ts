import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  content: {
    width: Dimensions.get('screen').width * 0.4,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 12,
  },
});
