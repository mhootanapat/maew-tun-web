import NavigationHeader from '@/common/components/header/NavigationHeader';
import ScrollingHeader from '@/common/components/header/ScrollingHeader';
import MainLayout from '@/layout/main';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const Page1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <ScrollingHeader>
        {/* TODO: use loading state when available */}
        <NavigationHeader />
      </ScrollingHeader>
      <Box display="flex" justifyContent="center">
        <Typography variant="heading-bold-lg" color="text.primary">
          {t('comingSoon')}
        </Typography>
      </Box>
    </>
  );
};

Page1.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
export default Page1;
