import { useState, useCallback } from 'react';
import api from '@api';
import { AxiosRequestConfig, AxiosError } from 'axios';

type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useRequest<T>() {
  const [state, setState] = useState<State<T>>({
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
