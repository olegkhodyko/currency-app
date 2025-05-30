export interface ConvertResult {
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    rate: number;
  };
  historical: false;
  date: string;
  timestamp: number;
  result: number;
}
