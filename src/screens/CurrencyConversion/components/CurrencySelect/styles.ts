import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    gap: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.textSecondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 16,
  },
  countryData: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    minWidth: 74,
  },
});
