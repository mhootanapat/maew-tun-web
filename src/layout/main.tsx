import NavigationHeader from '@/common/components/header/NavigationHeader';
import { IMainLayout } from '@/common/types/layout/main';
import { Box, Stack } from '@mui/material';

const MainLayout = ({ children }: IMainLayout) => (
  <Box sx={{ margin: '0 auto', background: (theme) => theme.palette.background.default }}>
    <Stack sx={{ minHeight: 1 }}>
      <NavigationHeader />
      {children}
    </Stack>
  </Box>
);

export default MainLayout;
