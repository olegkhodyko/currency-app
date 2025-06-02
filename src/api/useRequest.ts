import api from '@api';
import { useState, useCallback } from 'react';
import { AxiosRequestConfig, AxiosError } from 'axios';
import { UseRequestState } from '@_types/state/api';
import { UseRequestProps } from '@_types/props/api';

export function useRequest<T>(): UseRequestProps<T> {
  const [state, setState] = useState<UseRequestState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const request = useCallback(async (config: AxiosRequestConfig) => {
    setState({ data: null, loading: true, error: null });

    try {
      const response = await api.request<T>(config);
      setState({ data: response.data, loading: false, error: null });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      setState({
        data: null,
        loading: false,
        error: error?.message ?? 'Unknown error',
      });
      throw err;
    }
  }, []);

  const reset = () => {
    setState({ data: null, loading: false, error: null });
  };

  return { ...state, request, reset };
}
