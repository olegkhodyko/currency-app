import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AmountInput } from '@screens/CurrencyConversion/components';

const mockHandleChange = jest.fn();

jest.mock('@screens/CurrencyConversion/hooks/useAmountInput', () => {
  return () => ({
    amount: '123',
    handleChange: mockHandleChange,
  });
});

describe('AmountInput', () => {
  beforeEach(() => {
    mockHandleChange.mockClear();
  });

  it('renders input with correct testID and value', () => {
    const { getByTestId } = render(
      <AmountInput testID="amount-input" isLoading={false} />,
    );
    const input = getByTestId('amount-input-field');
    expect(input.props.value).toBe('123');
  });

  it('calls handleChange on text input', () => {
    const { getByTestId } = render(
      <AmountInput testID="amount-input" isLoading={false} />,
    );
    const input = getByTestId('amount-input-field');
    fireEvent.changeText(input, '456');
    expect(mockHandleChange).toHaveBeenCalledWith('456');
  });

  it('shows ActivityIndicator when isLoading is true', () => {
    const { getByTestId } = render(
      <AmountInput testID="amount-input" isLoading={true} />,
    );
    expect(getByTestId('amount-input-loading')).toBeTruthy();
  });
});
