import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('App renders without crashing', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('main-app-container')).toBeTruthy();
});
