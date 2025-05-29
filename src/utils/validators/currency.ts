import { z } from 'zod';

export const CurrencySchema = z.object({
  id: z.number(),
  name: z.string(),
  symbol: z.string(),
  symbolNative: z.string(),
  decimalDigits: z.number(),
  rounding: z.number(),
  code: z.string(),
  namePlural: z.string(),
  countryCodeISO2: z.string().length(2),
  flagSrc: z.string().url(),
});

export const CurrencyArraySchema = z.array(CurrencySchema);
export type CurrencyTypeFromSchema = z.infer<typeof CurrencySchema>;
