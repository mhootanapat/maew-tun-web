import useFontLoad from '@/common/hooks/useFontLoad';
import MainLayout from '@/layout/main';
import MaewTunFamilyIntro from '@/sections/homePage/MaewTunFamilyIntro';
import { ReactNode } from 'react';

const Home = () => {
  const { fontsLoaded } = useFontLoad();

  return <MaewTunFamilyIntro loading={!fontsLoaded} />;
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
