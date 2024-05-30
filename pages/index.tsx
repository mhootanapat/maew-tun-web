import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('kaiTunName')}</p>
      <p>{t('kaiKhemName')}</p>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  // TODO: create Laayout component
  return <div>{page}</div>;
};
export default Home;
