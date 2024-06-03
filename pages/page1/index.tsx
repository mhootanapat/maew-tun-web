import NavigationHeader from '@/common/components/header/NavigationHeader';
import ScrollingHeader from '@/common/components/header/ScrollingHeader';
import MainLayout from '@/layout/main';
import { Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const Page2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <ScrollingHeader>
        {/* TODO: use loading state when available */}
        <NavigationHeader />
      </ScrollingHeader>
      <Container>
        <Stack alignItems="center" my={2}>
          <Typography variant="heading-bold-lg" color="text.primary">
            {t('kaiTunName')}
          </Typography>
          <Typography variant="heading-bold-lg" color="text.primary">
            {t('kaiTunName')}
          </Typography>
          <Typography variant="heading-bold-lg" color="text.secondary">
            {t('kaiKhemName')}
          </Typography>
          <Typography variant="heading-bold-lg" color="text.secondary">
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
