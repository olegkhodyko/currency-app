import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.borderPrimary,
  },
});
