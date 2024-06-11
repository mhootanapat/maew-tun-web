/* eslint-disable sonarjs/no-duplicate-string */
import type { TypographyOptions } from '@mui/material/styles/createTypography';
const pxToRem = (value: number): string => `${value / 16}rem`;

// #region type
type TFontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';
type THeadingFontSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type TBodyFontSize = 'lg' | 'md' | 'sm' | 'xs';
type TAmountFontSize = 'xxl' | 'xl' | 'lg' | 'md';
type TWeight = Record<TFontWeight, number>;
type ISize = {
  heading: Record<THeadingFontSize, number>;
  body: Record<TBodyFontSize, number>;
  amount: Record<TAmountFontSize, number>;
};

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightSemiBold?: React.CSSProperties['fontWeight'];
  }

  interface Typography {
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'heading-bold-xl': React.CSSProperties;
    'heading-xl': React.CSSProperties;
    'heading-bold-lg': React.CSSProperties;
    'heading-lg': React.CSSProperties;
    'heading-bold-md': React.CSSProperties;
    'heading-md': React.CSSProperties;
    'heading-sm': React.CSSProperties;
    'heading-xs': React.CSSProperties;
    'heading-regular-xl': React.CSSProperties;
    'heading-regular-lg': React.CSSProperties;
    'heading-regular-md': React.CSSProperties;
    'heading-regular-sm': React.CSSProperties;
    'heading-regular-xs': React.CSSProperties;
    'body-lg': React.CSSProperties;
    'body-md': React.CSSProperties;
    'body-sm': React.CSSProperties;
    'body-xs': React.CSSProperties;
    'body-strong-lg': React.CSSProperties;
    'body-strong-md': React.CSSProperties;
    'body-strong-sm': React.CSSProperties;
    'body-bold-md'?: React.CSSProperties;
    'body-link-md': React.CSSProperties;
    'body-link-sm': React.CSSProperties;
    'amount-xxl': React.CSSProperties;
    'amount-xl': React.CSSProperties;
    'amount-lg': React.CSSProperties;
    'amount-md': React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    'heading-bold-xl': React.CSSProperties;
    'heading-xl'?: React.CSSProperties;
    'heading-bold-lg'?: React.CSSProperties;
    'heading-lg'?: React.CSSProperties;
    'heading-bold-md'?: React.CSSProperties;
    'heading-md'?: React.CSSProperties;
    'heading-sm'?: React.CSSProperties;
    'heading-xs'?: React.CSSProperties;
    'heading-regular-xl'?: React.CSSProperties;
    'heading-regular-lg'?: React.CSSProperties;
    'heading-regular-md'?: React.CSSProperties;
    'heading-regular-sm'?: React.CSSProperties;
    'heading-regular-xs'?: React.CSSProperties;
    'body-lg'?: React.CSSProperties;
    'body-md'?: React.CSSProperties;
    'body-sm'?: React.CSSProperties;
    'body-xs'?: React.CSSProperties;
    'body-strong-lg'?: React.CSSProperties;
    'body-strong-md'?: React.CSSProperties;
    'body-strong-sm'?: React.CSSProperties;
    'body-bold-md'?: React.CSSProperties;
    'body-link-md'?: React.CSSProperties;
    'body-link-sm'?: React.CSSProperties;
    'amount-xxl'?: React.CSSProperties;
    'amount-xl'?: React.CSSProperties;
    'amount-lg'?: React.CSSProperties;
    'amount-md'?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    // MUI: Disabled default typography
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;

    // New typography
    'heading-bold-xl': true;
    'heading-xl': true;
    'heading-bold-lg': true;
    'heading-lg': true;
    'heading-bold-md': true;
    'heading-md': true;
    'heading-sm': true;
    'heading-xs': true;
    'heading-regular-xl': true;
    'heading-regular-lg': true;
    'heading-regular-md': true;
    'heading-regular-sm': true;
    'heading-regular-xs': true;
    'body-lg': true;
    'body-md': true;
    'body-sm': true;
    'body-xs': true;
    'body-strong-lg': true;
    'body-strong-md': true;
    'body-strong-sm': true;
    'body-bold-md': true;
    'body-link-md': true;
    'body-link-sm': true;
    'amount-xxl': true;
    'amount-xl': true;
    'amount-lg': true;
    'amount-md': true;
  }
}
// #endregion type

// #region config
const FONT_PRIMARY = 'Kodchasan';
const FONT_WEIGHT: TWeight = Object.freeze({
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 900,
});
const FONT_SIZE: ISize = Object.freeze({
  heading: Object.freeze({
    xl: 32,
    lg: 28,
    md: 24,
    sm: 20,
    xs: 18,
  }),
  // using for body, subtitle and link
  body: Object.freeze({
    lg: 16,
    md: 14,
    sm: 12,
    xs: 10,
  }),
  amount: Object.freeze({
    xxl: 40,
    xl: 32,
    lg: 28,
    md: 24,
  }),
});
const LINE_HEIGHT: ISize = Object.freeze({
  heading: Object.freeze({
    xl: 1.375,
    lg: 1.5,
    md: 1.5,
    sm: 1.5,
    xs: 1.5,
  }),
  // using for body, subtitle and link
  body: Object.freeze({
    lg: 1.5,
    md: 1.5,
    sm: 1.3333,
    xs: 1.4,
  }),
  amount: Object.freeze({
    xxl: 1.1,
    xl: 1.25,
    lg: 1.14285,
    md: 1.16666,
  }),
});
// #endregion config

const getHeadingStyle = (size: THeadingFontSize, weight: TFontWeight) => ({
  fontFamily: FONT_PRIMARY,
  fontWeight: FONT_WEIGHT[weight],
  lineHeight: LINE_HEIGHT.heading[size],
  fontSize: pxToRem(FONT_SIZE.heading[size]),
});

const getBodyStyle = (size: TBodyFontSize, weight: TFontWeight) => ({
  fontFamily: FONT_PRIMARY,
  fontWeight: FONT_WEIGHT[weight],
  lineHeight: LINE_HEIGHT.body[size],
  fontSize: pxToRem(FONT_SIZE.body[size]),
});
const getAmountStyle = (size: TAmountFontSize, weight: TFontWeight) => ({
  fontFamily: FONT_PRIMARY,
  fontWeight: FONT_WEIGHT[weight],
  lineHeight: LINE_HEIGHT.amount[size],
  fontSize: pxToRem(FONT_SIZE.amount[size]),
});

const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: FONT_WEIGHT.regular,
  fontWeightMedium: FONT_WEIGHT.medium,
  fontWeightSemiBold: FONT_WEIGHT.semiBold,

  // MUI: Disabled default typography
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  caption: undefined,

  /**
   * IMPORTANT: Many MUI components are used from body1 and body2, e.g. inputs, etc.
   * NOTE: Direct use are not allowed. Please use from body-lg and body-md instead.
   */
  body1: getBodyStyle('lg', 'regular'),
  body2: getBodyStyle('md', 'regular'),

  // MUI: Available typography + Custom typography
  'heading-bold-xl': getHeadingStyle('xl', 'bold'),
  'heading-xl': getHeadingStyle('xl', 'semiBold'),
  'heading-bold-lg': getHeadingStyle('lg', 'bold'),
  'heading-lg': getHeadingStyle('lg', 'semiBold'),
  'heading-bold-md': getHeadingStyle('md', 'bold'),
  'heading-md': getHeadingStyle('md', 'semiBold'),
  'heading-sm': getHeadingStyle('sm', 'semiBold'),
  'heading-xs': getHeadingStyle('xs', 'semiBold'),
  'heading-regular-xl': getHeadingStyle('xl', 'regular'),
  'heading-regular-lg': getHeadingStyle('lg', 'regular'),
  'heading-regular-md': getHeadingStyle('md', 'regular'),
  'heading-regular-sm': getHeadingStyle('sm', 'regular'),
  'heading-regular-xs': getHeadingStyle('xs', 'regular'),
  'body-lg': getBodyStyle('lg', 'regular'),
  'body-md': getBodyStyle('md', 'regular'),
  'body-sm': getBodyStyle('sm', 'regular'),
  'body-xs': getBodyStyle('xs', 'regular'),
  'body-strong-lg': getBodyStyle('lg', 'semiBold'),
  'body-strong-md': getBodyStyle('md', 'semiBold'),
  'body-strong-sm': getBodyStyle('sm', 'medium'),
  'body-bold-md': getBodyStyle('md', 'bold'),
  'body-link-md': getBodyStyle('md', 'medium'),
  'body-link-sm': getBodyStyle('sm', 'medium'),
  'amount-xxl': getAmountStyle('xxl', 'semiBold'),
  'amount-xl': getAmountStyle('xl', 'semiBold'),
  'amount-lg': getAmountStyle('lg', 'semiBold'),
  'amount-md': getAmountStyle('md', 'semiBold'),
  button: getBodyStyle('md', 'semiBold'),
};

export default typography;
