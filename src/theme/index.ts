import ComponentsOverrides from '@/theme/overrides';
import palette from '@/theme/palette';
import typography from '@/theme/typography';
import { createTheme, ThemeOptions } from '@mui/material';

const themeOptions: ThemeOptions = {
  palette,
  typography,
  components: ComponentsOverrides,
};

const theme = createTheme(themeOptions);

export default theme;
