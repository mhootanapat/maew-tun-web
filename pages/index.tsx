import NavigationHeader from '@/common/components/header/NavigationHeader';
import PageTabs from '@/common/components/tabs/PageTabs';
import MainLayout from '@/layout/main';
import KaiKhemBanner from '@/sections/kaikem/KaiKhemBanner';
import KaiKhemInformation from '@/sections/kaikem/KaiKhemInformation';
import KaiTunBanner from '@/sections/kaitun/KaiTunBanner';
import KaiTunInformation from '@/sections/kaitun/KaiTunInformation';
import { Stack } from '@mui/material';
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
      <Stack spacing={0}>
        <KaiTunBanner />
        <KaiTunInformation />
        <KaiKhemBanner />
        <KaiKhemInformation />
      </Stack>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
