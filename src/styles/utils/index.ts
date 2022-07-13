export type T_breakpoints = {
  [key: string]: number;
};

export const breakpoints: T_breakpoints = {
  SM: 480,
  MD: 768,
  LG: 1200
};

const mediaQueryMaker = (type: string) => {
  return (size: string, innerCss: string) =>
    `@media (${type}: ${breakpoints[size]}px) {
    ${innerCss}
  `;
};

export const maxMediaQuery = mediaQueryMaker('max-width');
export const minMediaQuery = mediaQueryMaker('min-width');
