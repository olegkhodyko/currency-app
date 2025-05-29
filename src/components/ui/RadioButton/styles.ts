import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.textPrimary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: COLORS.textPrimary,
  },
});
