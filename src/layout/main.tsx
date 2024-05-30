import PageTabs from '@/common/components/tabs/PageTabs';
import { IMainLayout } from '@/common/types/layout/main';
import { Box, Stack } from '@mui/material';

const MainLayout = ({ children }: IMainLayout) => (
  <Box sx={{ margin: '0 auto', background: (theme) => theme.palette.background.default }}>
    <Stack sx={{ minHeight: 1 }}>
      <PageTabs isLoading={false} sxProps={{ zIndex: 9999 }} />
      {children}
    </Stack>
  </Box>
);

export default MainLayout;
