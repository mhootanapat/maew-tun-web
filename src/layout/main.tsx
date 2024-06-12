import NavigationHeader from '@/common/components/header/NavigationHeader';
import ScrollingHeader from '@/common/components/header/ScrollingHeader';
import { IMainLayout } from '@/common/types/layout/main';
import { Box, Stack } from '@mui/material';

// const NavigationHeader = dynamic(() => import('@/common/components/header/NavigationHeader'), { ssr: false });

const MainLayout = ({ children }: IMainLayout) => (
  <Box sx={{ margin: '0 auto', background: (theme) => theme.palette.background.default }}>
    <ScrollingHeader>
      <NavigationHeader />
    </ScrollingHeader>
    <Stack sx={{ minHeight: 1 }}>
      <NavigationHeader />
      {children}
    </Stack>
  </Box>
);

export default MainLayout;
