import React from 'react';
import { Ui, Layout } from '@components/index';

export default function CurrencyConversion() {
  const testID = 'currency-conversion-screen';

  return (
    <Layout.ScreenContainer testID={testID}>
      <Ui.Text variant="extraLarge">Hello bro</Ui.Text>
      <Ui.Text variant="large">Hello bro</Ui.Text>
      <Ui.Text variant="medium">Hello bro</Ui.Text>
    </Layout.ScreenContainer>
  );
}
