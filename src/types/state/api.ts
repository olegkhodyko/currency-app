export interface UseRequestState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
