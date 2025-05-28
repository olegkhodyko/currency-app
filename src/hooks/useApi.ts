import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type UseApiReturnType<T> = ApiResponse<T> & {
  fetchData: (config: AxiosRequestConfig) => Promise<void>;
};

export default function useApi<T>(): UseApiReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (config: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        ...config,
        baseURL: 'https://api.fxratesapi.com/currencies',
        timeout: 10000,
      });

      setData(response.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(
        axiosError.message || 'Произошла ошибка при выполнении запроса.',
      );

      console.log('ERROR', axiosError);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
}
