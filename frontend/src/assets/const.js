export const MOBILE_BREAKPOINT = {
  xs: '360px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
};

export const DEVICE = {
  XS: `(max-width: ${MOBILE_BREAKPOINT.sm})`,
  SM: `(min-width: ${MOBILE_BREAKPOINT.sm})`,
  MD: `(min-width: ${MOBILE_BREAKPOINT.md})`,
  LG: `(min-width: ${MOBILE_BREAKPOINT.lg})`,
  XL: `(min-width: ${MOBILE_BREAKPOINT.xl})`,
  XXL: `(min-width: ${MOBILE_BREAKPOINT.xxl})`,
};

export default {};
