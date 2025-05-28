import React from 'react';
import { Layout, Modules } from '@components';

export default function CurrencyConversion() {
  const testID = 'currency-conversion-screen';

  return (
    <Layout.ScreenContainer testID={testID}>
      <Modules.FromTo testID={`${testID}-from_to`} />
    </Layout.ScreenContainer>
  );
}
