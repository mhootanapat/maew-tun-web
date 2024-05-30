import { alpha } from '@mui/material/styles';

const COLORS = {
  // NOTE: don't forget to add type to declare module when add more color
  white: '#fff',
  white_opacity_20: alpha('#fff', 0.2),
  white_opacity_60: alpha('#fff', 0.6),
  white_opacity_80: alpha('#fff', 0.8),
  white_opacity_90: alpha('#fff', 0.9),
  grey: '#70708A',
  soft_grey: '#9999AD',
  dark_grey: '#3D3D4F',
  black: '#25242D',
  orange: '#F97316',
  orange_light: '#FFEDD5',
  green: '#16A34A',
  green_light: '#DCFCE7',
};

const TEXT = {
  primary: COLORS.black,
  secondary: COLORS.dark_grey,
  tertiary: COLORS.grey,
  disabled: COLORS.soft_grey,
  white: COLORS.white,
};

const BACKGROUND = {
  default: COLORS.white,
  transparent: {
    20: COLORS.white_opacity_20,
    80: COLORS.white_opacity_80,
    90: COLORS.white_opacity_90,
  },
};

const palette = {
  text: TEXT,
  background: BACKGROUND,
  colors: COLORS,
};

declare module '@mui/material/styles' {
  interface Palette {
    colors: {
      white: string;
      white_opacity_20: string;
      white_opacity_60: string;
      white_opacity_80: string;
      white_opacity_90: string;
      grey: string;
      soft_grey: string;
      dark_grey: string;
      black: string;
      orange: string;
      orange_light: string;
      green: string;
      green_light: string;
    };
  }

  interface TypeText {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    white: string;
  }
  interface TypeBackground {
    default: string;
    transparent: {
      20: string;
      80: string;
      90: string;
    };
  }
}

export default palette;
