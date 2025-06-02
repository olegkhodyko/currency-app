import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    maxWidth: '100%',
  },
  digitContainer: {
    overflow: 'hidden',
    alignItems: 'center',
  },
  hiddenElement: {
    position: 'absolute',
    opacity: 0,
  },
});
