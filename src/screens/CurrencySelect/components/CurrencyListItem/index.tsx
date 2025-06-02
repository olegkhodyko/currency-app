import { Ui } from '@components';
import { TouchableOpacity, View } from 'react-native';
import { FC, memo } from 'react';
import { CurrencyItemProps } from '@screens/CurrencySelect/types';
import { useCurrencyStore } from '@store/currencyStore';
import styles from './styles';

const CurrencyListItem: FC<CurrencyItemProps> = memo(
  ({ testID, item, onSelect }) => {
    const isActive = useCurrencyStore(state => state.activeId === item.id);

    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => onSelect(item)}
        testID={testID}
        style={[styles.container, isActive && styles.active]}>
        <View style={styles.currency}>
          <Ui.Flag testID={`${testID}-img`} size={30} uri={item.flagSrc} />
          <Ui.Text>{item.code}</Ui.Text>
        </View>

        <Ui.RadioButton
          selected={isActive}
          onPress={() => onSelect(item)}
          size={16}
        />
      </TouchableOpacity>
    );
  },
);

export default CurrencyListItem;
