import { StyledCardBlur } from '@/common/components/CardBlur';
import { IMaewTunPageName } from '@/common/types/sections/MaewTunPageName';
import { Box, Skeleton, Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const StyledPageNameWrapper = styled(StyledCardBlur)(() => ({
  maxHeight: '250px',
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `radial-gradient(circle at bottom ,rgba(255, 231, 122, 0.5), 
      rgba(255, 231, 122, 0.5) 10%,transparent 10%, transparent 20%, 
      rgba(255, 231, 122, 0.5) 20%, rgba(255, 231, 122, 0.5) 30%, transparent 30%, transparent 40%, 
      rgba(255, 231, 122, 0.5) 40%, rgba(255, 231, 122, 0.5) 50%, transparent 50%, transparent 60%, 
      rgba(255, 231, 122, 0.5) 60%, rgba(255, 231, 122, 0.5) 70%, transparent 70%, transparent 80%, 
      rgba(255, 231, 122, 0.5) 80%, rgba(255, 231, 122, 0.5) 90%, transparent 90%) 0% 0% / 3em 3em #FFFFFF`,
  backgroundSize: '40px 40px',
}));

const StyledPageNameTypography = styled(Typography)(() => ({
  fontSize: '72px',
  fontWeight: 'bolder',
  '@media (max-width:515px)': {
    fontSize: '56px',
  },
  '@media (max-width:415px)': {
    fontSize: '32px',
  },
}));

const MaewTunPageName = ({ pageLoading }: IMaewTunPageName) => {
  const { t } = useTranslation();

  return pageLoading ? (
    <Box position="relative" width="100%" height="100%" minHeight={200}>
      <Skeleton variant="rounded" width="100%" height="100%" sx={{ borderRadius: 3 }} />
    </Box>
  ) : (
    <StyledPageNameWrapper>
      <Stack alignItems="center" whiteSpace="nowrap">
        <StyledPageNameTypography>{t('webTitle')}</StyledPageNameTypography>
        <Typography variant="body-bold-md" color="text.primary">
          {t('greeting')}
        </Typography>
      </Stack>
    </StyledPageNameWrapper>
  );
};

export default memo(MaewTunPageName);
