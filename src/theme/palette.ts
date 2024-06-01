import { alpha } from '@mui/material/styles';

const COLORS = {
  // NOTE: don't forget to add type to declare module when add more color

  //#region white
  white: '#fff',
  white_opacity_20: alpha('#fff', 0.2),
  white_opacity_60: alpha('#fff', 0.6),
  white_opacity_80: alpha('#fff', 0.8),
  white_opacity_90: alpha('#fff', 0.9),
  //#endregion white

  //#region grey
  grey: '#70708A',
  grey_soft: '#9999AD',
  grey_dark: '#3D3D4F',
  //#endregion grey

  //#region black
  black: '#25242D',
  //#endregion black

  //#region orange
  orange: '#F97316',
  orange_light: '#FEB941',
  orange_opacity_005: alpha('#F97316', 0.05),
  //#endregion orange

  //#region green
  yellow_dark: '#FFC94A',
  //#endregion orange

  //#region green
  green: '#16A34A',
  green_light: '#DCFCE7',
  //#endregion green

  //#region brown
  brown: '#876445',
  brown_coffee: '#D8AE7E',
  brown_beige: '#FFF2D7',
  brown_dark: '#543310',
  //#endregion brown
};

const TEXT = {
  primary: COLORS.brown_dark,
  secondary: COLORS.grey_dark,
  tertiary: COLORS.grey,
  disabled: COLORS.grey_soft,
  white: COLORS.white,
};

const BACKGROUND = {
  default: COLORS.brown_beige,
  primary: COLORS.brown,
  navigationHeader: COLORS.brown_beige,
  transparent: {
    20: COLORS.white_opacity_20,
    80: COLORS.white_opacity_80,
    90: COLORS.white_opacity_90,
  },
};

const palette = {
  colors: COLORS, // NOTE: Palette type
  text: TEXT, // NOTE: TypeText type
  background: BACKGROUND, // NOTE: TypeBackground type
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
      grey_soft: string;
      grey_dark: string;
      black: string;
      orange: string;
      orange_light: string;
      orange_opacity_005: string;
      yellow_dark: string;
      green: string;
      green_light: string;
      brown_coffee: string;
      brown_beige: string;
      brown: string;
      brown_dark: string;
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
    navigationHeader: string;
    primary: string;
    transparent: {
      20: string;
      80: string;
      90: string;
    };
  }
}

export default palette;
