import NavigationHeader from '@/common/components/header/NavigationHeader';
import { Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader pageTitle={t('pageTitle')} />
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
  // TODO: create Layout component
  return <div>{page}</div>;
};
export default Home;
