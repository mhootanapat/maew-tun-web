import NavigationHeader from '@/common/components/header/NavigationHeader';
import PageTabs from '@/common/components/tabs/PageTabs';
import MainLayout from '@/layout/main';
import { Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const Page2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title={t('page1Title')}>
        {/* TODO: use loading state when available */}
        <PageTabs isLoading={false} sxProps={{ mt: 2 }} />
      </NavigationHeader>
      <Container>
        <Stack alignItems="center" my={2}>
          <Typography variant="h2" color="text.primary">
            {t('kaiTunName')}
          </Typography>
          <Typography variant="h2" color="text.primary">
            {t('kaiTunName')}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {t('kaiKhemName')}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {t('kaiKhemName')}
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

Page2.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Page2;
