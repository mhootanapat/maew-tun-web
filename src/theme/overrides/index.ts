import Container from '@/theme/overrides/Container';
import { Components, Theme } from '@mui/material/styles';
import CssBaseline from '@/theme/overrides/CssBaseline';

const ComponentsOverrides: Components<Theme> = Object.assign(
  Container,
  CssBaseline
  /*, Other(theme)*/
);

export default ComponentsOverrides;
