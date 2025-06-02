import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.borderPrimary,
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  input: {
    borderWidth: 0,
    paddingHorizontal: 0,
    flex: 1,
  },
});
