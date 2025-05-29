import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 24,
  },
  listWrapper: {
    borderRadius: 8,
    backgroundColor: COLORS.backgroundSecondary,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  currencyItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
  containerWrapper: {
    gap: 8,
  },
  active: {
    backgroundColor: COLORS.backgroundActive,
  },
});
