import { Box, Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ContentWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.colors.black,
}));

const KaiKhemInformation = () => {
  const { t } = useTranslation();
  return (
    <ContentWrapper>
      <Stack>
        <Typography variant="h1" color={(theme) => theme.palette.text.white}>
          {t('kaiKhemName')}
        </Typography>
        <Typography variant="h1" color={(theme) => theme.palette.text.white}>
          {t('kaiTunName')}
        </Typography>
      </Stack>
    </ContentWrapper>
  );
};

export default memo(KaiKhemInformation);