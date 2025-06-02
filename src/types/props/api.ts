import { UseRequestState } from '@_types/state/api';
import { AxiosRequestConfig } from 'axios';

export interface UseRequestProps<T, R = any> extends UseRequestState<T> {
  request: (config: AxiosRequestConfig<R>) => Promise<T>;
  reset: () => void;
}
