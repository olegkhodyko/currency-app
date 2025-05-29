import { useCurrencies } from '@hooks';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function CurrencySelect() {
  const { error } = useCurrencies();

  useEffect(() => {
    if (error) {
      console.log('ERROR:', error);
    }
  }, [error]);

  return <View />;
}
