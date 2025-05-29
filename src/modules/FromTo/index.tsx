import { Ui } from '@components';
import { CurrencySelect } from '@modules';
import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { CountyItemProps } from '@_types/props/country';

interface FromToProps {
  testID: string;
}

const initial: [CountyItemProps, CountyItemProps] = [
  { id: 1, code: 'CAD', flagSrc: 'https://flagcdn.com/h40/ca.png' },
  { id: 2, code: 'USD', flagSrc: 'https://flagcdn.com/h40/us.png' },
];

const FromTo: FC<FromToProps> = ({ testID }) => {
  const [data, setData] = useState<[CountyItemProps, CountyItemProps]>(initial);

  const handleSwitch = () => {
    setData(([from, to]) => [to, from]);
  };

  return (
    <View testID={testID} style={styles.container}>
      <CurrencySelect testID={`${testID}-from`} title="From" data={data[0]} />

      <TouchableOpacity
        testID={`${testID}-switch`}
        style={styles.switch}
        onPress={handleSwitch}>
        <Ui.Icon testID="" type="reverse" size={16} />
      </TouchableOpacity>

      <CurrencySelect testID={`${testID}-to`} title="To" data={data[1]} />
    </View>
  );
};

export default FromTo;
