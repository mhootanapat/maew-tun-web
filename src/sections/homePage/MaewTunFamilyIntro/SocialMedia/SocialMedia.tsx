import { StyledCardBlur } from '@/common/components/CardBlur';
import { socialMediaList } from '@/common/constants/socialMediaList';
import SocialMediaItem from '@/sections/homePage/MaewTunFamilyIntro/SocialMedia/SocialMediaItem';
import { Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const StyledSocialMediaWrapper = styled(StyledCardBlur)(({ theme }) => ({
  background: theme.palette.colors.brown,
  height: '100%',
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StyledSocialMediaTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: 'text.primary',
  backgroundColor: theme.palette.colors.brown_beige,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1.5),
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
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
      <StyledSocialMediaTitle>{t('letsGetSocial')}</StyledSocialMediaTitle>
      {socialMediaList.map((item) => (
        <SocialMediaItem
          key={item.platformName}
          iconPath={item.iconPath}
          altValue={item.altValue}
          platformName={item.platformName}
          borderColor={item.borderColor}
          profileUrl={item.profileUrl}
        />
      ))}
    </StyledSocialMediaWrapper>
  );
};

export default memo(SocialMedia);
