import NavigationHeader from '@/common/components/header/NavigationHeader';
import ScrollingHeader from '@/common/components/header/ScrollingHeader';
import MainLayout from '@/layout/main';
import MaewTunFamilyIntro from '@/sections/homePage/kaitun/MaewTunFamilyIntro/MaewTunFamilyIntro';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

const Home = () => (
  <>
    <ScrollingHeader>
      {/* TODO: use loading state when available */}
      <NavigationHeader />
    </ScrollingHeader>
    <Stack spacing={0}>
      <MaewTunFamilyIntro />

      {/* <KaiTunBanner />
      <KaiTunInformation />

      <KaiKhemBanner />
      <KaiKhemInformation /> */}
    </Stack>
  </>
);

Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
