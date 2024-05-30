import ComponentsOverrides from '@/theme/overrides';
import palette from '@/theme/palette';
import { createTheme, ThemeOptions } from '@mui/material';

const themeOptions: ThemeOptions = {
  palette,
  components: ComponentsOverrides,
};

const theme = createTheme(themeOptions);

export default theme;
