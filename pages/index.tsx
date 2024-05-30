import NavigationHeader from '@/common/components/header/NavigationHeader';
import PageTabs from '@/common/components/tabs/PageTabs';
import MainLayout from '@/layout/main';
import { Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title={t('homePageTitle')}>
        {/* TODO: use loading state when available */}
        <PageTabs isLoading={false} sxProps={{ mt: 2 }} />
      </NavigationHeader>
      <Container>
        <Stack alignItems="center" my={2}>
          <Typography variant="h2" color="text.primary">
            {t('kaiTunName')}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {t('kaiKhemName')}
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
