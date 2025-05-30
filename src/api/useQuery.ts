import { useEffect } from 'react';
import { useRequest } from '@api/useRequest';
import { AxiosRequestConfig } from 'axios';

export function useQuery<T>(config: AxiosRequestConfig, deps: any[] = []) {
  const { data, loading, error, request, reset } = useRequest<T>();

  useEffect(() => {
    request(config);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error, refetch: request, reset };
}
