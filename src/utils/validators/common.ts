import dayjs, { ConfigType, OpUnitType } from 'dayjs';

export function checkEveryTruthy<T>(elements: T[]): boolean {
  return elements.every(Boolean);
}

export const isExpiredTime = (
  date: ConfigType,
  ttl: number,
  unit: OpUnitType,
): boolean => {
  return dayjs().diff(dayjs(date), unit) > ttl;
};
