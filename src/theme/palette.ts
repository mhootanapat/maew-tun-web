const COLORS = {
  white: '#fff',
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
};

const palette = {
  text: TEXT,
  background: BACKGROUND,
  colors: COLORS,
};

export default palette;
