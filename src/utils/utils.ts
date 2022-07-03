export const moneyFormatter = (value: number, format?: string): string => {
  const formatter = Intl.NumberFormat(format);
  return `$${formatter.format(value)}`;
};
