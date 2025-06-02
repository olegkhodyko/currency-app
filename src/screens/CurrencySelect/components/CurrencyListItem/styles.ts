import Constants from '@utils/constants';
import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundSecondary,
    height: Constants.Dimensions.SearchItemHeight,
  },
  active: {
    backgroundColor: COLORS.backgroundActive,
  },
  currency: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
});
