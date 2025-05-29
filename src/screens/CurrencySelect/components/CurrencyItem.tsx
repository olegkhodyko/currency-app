import { Ui } from '@components';
import { TouchableOpacity, View } from 'react-native';
import { FC, memo } from 'react';
import { CurrencyItemProps } from '@screens/CurrencySelect/types/props';

import styles from '../styles';

const CurrencyItem: FC<CurrencyItemProps> = memo(
  ({ testID, item, isActive, onSelect }) => (
    <TouchableOpacity
      onPress={() => onSelect(item.id)}
      testID={testID}
      style={[styles.item, isActive && styles.active]}>
      <View style={styles.currencyItem}>
        <Ui.Flag testID={`${testID}-img`} size={30} uri={item.flagSrc} />
        <Ui.Text>{item.code}</Ui.Text>
      </View>

      <Ui.RadioButton
        selected={isActive}
        onPress={() => onSelect(item.id)}
        size={16}
      />
    </TouchableOpacity>
  ),
);

export default CurrencyItem;
