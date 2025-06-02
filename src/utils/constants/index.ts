export default {
  DefaultAnimationDelay: 800,
  DefaultDebounceDelay: 500,
  DefaultExpiredHistoryMin: 30,
  DefaultApiTimeout: 10000,
  DefaultToastVisibilityTime: 3000,
  Error: {
    RequestTitle: 'Request failed',
    FetchConversionMessage:
      'Unable to fetch conversion rate. Please try again later.',
  },
  Dimensions: {
    SearchItemHeight: 60,
  },
} as const;
