import MainLayout from '@/layout/main';
import MaewTunFamilyIntro from '@/sections/homePage/MaewTunFamilyIntro';
import { ReactNode } from 'react';

const Home = () => <MaewTunFamilyIntro />;

Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
