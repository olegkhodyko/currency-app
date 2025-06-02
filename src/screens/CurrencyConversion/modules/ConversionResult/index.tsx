import React, { FC } from 'react';
import { Ui } from '@components';
import { ConversionResultProps } from '@screens/CurrencyConversion/types';
import { FadeSlideView } from '@screens/CurrencyConversion/components';
import { useConversionResult } from '@screens/CurrencyConversion/hooks';
import styles from './styles';

const ConversionResult: FC<ConversionResultProps> = ({ testID, data }) => {
  const { amountTitle, resultTitle, visible } = useConversionResult(data);

  return (
    <FadeSlideView testID={testID} visible={visible} style={styles.container}>
      <Ui.AnimatedNumber
        testID={`${testID}-amount`}
        numberString={amountTitle}
        variant="medium"
      />
      <Ui.AnimatedNumber
        testID={`${testID}-result`}
        numberString={resultTitle}
      />
    </FadeSlideView>
  );
};

export default ConversionResult;
