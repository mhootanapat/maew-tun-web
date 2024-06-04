import { StyledCardBlur } from '@/common/components/CardBlur';
import SocialMediaItem from '@/sections/homePage/kaitun/MaewTunFamilyIntro/SocialMedia/SocialMediaItem';
import { Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const StyledSocialMediaWrapper = styled(StyledCardBlur)(({ theme }) => ({
  background: theme.palette.colors.brown,
  height: '100%',
}));

const StyledSocialMediaTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: 'text.primary',
  backgroundColor: theme.palette.colors.brown_beige,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1.5),
  display: 'flex',
  justifyContent: 'center',
  animation: 'heartbeat 5s cubic-bezier(0.64, 0, 0.78, 0) 0s infinite normal none',

  '@keyframes heartbeat': {
    '0%': {
      animationTimingFunction: 'ease-out',
      transform: 'scale(1)',
      transformOrigin: 'center center',
    },
    '10%': {
      animationTimingFunction: 'ease-in',
      transform: 'scale(0.91)',
    },
    '17%': {
      animationTimingFunction: 'ease-out',
      transform: 'scale(0.98)',
    },
    '33%': {
      animationTimingFunction: 'ease-in',
      transform: 'scale(0.87)',
    },
    '45%': {
      animationTimingFunctionn: 'ease-out',
      transform: 'scale(1)',
    },
  },

  '@media (max-width:515px)': {
    fontSize: '20px',
  },
  '@media (max-width:415px)': {
    fontSize: '16px',
  },
}));
const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <StyledSocialMediaWrapper>
      <Stack spacing={8} alignItems="center" height="100%">
        <StyledSocialMediaTitle>{t('letsGetSocial')}</StyledSocialMediaTitle>
        <SocialMediaItem />
        <Stack>
          <StyledSocialMediaTitle>{t('letsGetSocial')}</StyledSocialMediaTitle>
        </Stack>
      </Stack>
    </StyledSocialMediaWrapper>
  );
};

export default memo(SocialMedia);
