import NavigationHeader from '@/common/components/header/NavigationHeader';
import ScrollingHeader from '@/common/components/header/ScrollingHeader';
import LOCAL_STORAGE_KEY from '@/common/constants/localStorageKey';
import { IMainLayout } from '@/common/types/layout/main';
import { Box, Stack } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const MainLayout = ({ children }: IMainLayout) => {
  const { i18n } = useTranslation();
  const language = useMemo(
    () => i18n.language ?? localStorage.getItem(LOCAL_STORAGE_KEY.lang) ?? 'th',
    [i18n.language]
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <Box sx={{ margin: '0 auto', background: (theme) => theme.palette.background.default }}>
      <ScrollingHeader>
        <NavigationHeader />
      </ScrollingHeader>
      <Stack sx={{ minHeight: 1 }}>
        <NavigationHeader />
        {children}
      </Stack>
    </Box>
  );
};

export default MainLayout;
