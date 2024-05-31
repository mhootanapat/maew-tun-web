import NavigationHeader from '@/common/components/header/NavigationHeader';
import PageTabs from '@/common/components/tabs/PageTabs';
import MainLayout from '@/layout/main';
import MaewTunFamilyIntro from '@/sections/homePage/MaewTunFamilyIntro';
import KaiKhemBanner from '@/sections/homePage/kaikem/KaiKhemBanner';
import KaiKhemInformation from '@/sections/homePage/kaikem/KaiKhemInformation';
import KaiTunBanner from '@/sections/homePage/kaitun/KaiTunBanner';
import KaiTunInformation from '@/sections/homePage/kaitun/KaiTunInformation';
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
        <MaewTunFamilyIntro />
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
