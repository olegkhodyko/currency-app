import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 24,
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
  listWrapper: {
    borderRadius: 8,
  },
  containerWrapper: {
    gap: 8,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
  },
  active: {
    backgroundColor: COLORS.backgroundActive,
  },
  emptyListWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
