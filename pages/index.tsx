import NavigationHeader from '@/common/components/header/NavigationHeader';
import ScrollingHeader from '@/common/components/header/ScrollingHeader';
import MainLayout from '@/layout/main';
import MaewTunFamilyIntro from '@/sections/homePage/MaewTunFamilyIntro';
import { ReactNode } from 'react';

const Home = () => (
  <>
    <ScrollingHeader>
      <NavigationHeader />
    </ScrollingHeader>
    <MaewTunFamilyIntro />
  </>
);

Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
