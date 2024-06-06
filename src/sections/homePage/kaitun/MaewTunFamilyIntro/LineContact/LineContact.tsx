import ImageWithFallback from '@/common/components/ImageWithFallback';
import { lineAddFriendUrl } from '@/common/constants/socialMediaList';
import { MAEW_TUN_INTRO_CARD_SPACING } from '@/sections/homePage/kaitun/MaewTunFamilyIntro/MaewTunFamilyIntro';
import { Box, Typography, styled } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const MAEW_TUN_INTRO_LINE_CONTACT_CARD_HEIGHT = 100;

const StyledLineContactWrapper = styled(Box)(({ theme }) => ({
  maxHeight: MAEW_TUN_INTRO_LINE_CONTACT_CARD_HEIGHT,
  minWidth: 210,
  borderRadius: theme.spacing(3),
  background: theme.palette.colors.brown,
  marginBottom: theme.spacing(MAEW_TUN_INTRO_CARD_SPACING),
  color: theme.palette.colors.white,
  cursor: 'pointer',
  display: 'inline-flex',

  ':hover': {
    filter: 'brightness(110%)',
    transform: 'translateY(-6px)',
    transition: 'transform 250ms cubic-bezier(.3, .7, .4, 1.5)',
  },

  ':active': {
    transform: 'translateY(-2px)',
    transition: 'transform 34ms',
  },
}));

const StyledLineText = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 'bold',
  '@media (min-width:933px)': {
    fontSize: '24px',
  },
  '@media (max-width:415px)': {
    fontSize: '16px',
  },
}));

const RIBBON_BORDER_STYLE = '3px solid #BF9F7C';
const Ribbon = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: ' -20px',
  top: '-5px',
  zIndex: 1,
  overflow: 'hidden',
  width: '75px',
  height: '75px',
  textAlign: 'right',

  span: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: theme.palette.colors.brown_dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '20px',
    transform: 'rotate(45deg)',
    WebkitTransform: 'rotate(45deg)',
    width: '100px',
    display: 'block',
    background: 'linear-gradient(#EDD0A4 0%, #BF9F7C 100%)',
    boxShadow: '0 3px 10px -5px rgba(0, 0, 0, 1)',
    position: 'absolute',
    top: '19px; right: -21px',

    ':before': {
      content: "''",
      position: 'absolute',
      left: '0px; top: 100%',
      zIndex: -1,
      borderLeft: RIBBON_BORDER_STYLE,
      borderRight: RIBBON_BORDER_STYLE,
      borderBottom: RIBBON_BORDER_STYLE,
      borderTop: RIBBON_BORDER_STYLE,
    },

    ':after': {
      content: "''",
      position: 'absolute',
      right: '0px; top: 100%',
      zIndex: -1,
      borderLeft: RIBBON_BORDER_STYLE,
      borderRight: RIBBON_BORDER_STYLE,
      borderBottom: RIBBON_BORDER_STYLE,
      borderTop: RIBBON_BORDER_STYLE,
    },
  },
}));

const StyledLineQRImage = styled(ImageWithFallback)(({ theme }) => ({
  maxHeight: MAEW_TUN_INTRO_LINE_CONTACT_CARD_HEIGHT,
  maxWidth: MAEW_TUN_INTRO_LINE_CONTACT_CARD_HEIGHT,
  width: '100%',
  minWidth: '100px',
  height: '100%',
  borderRadius: theme.spacing(3),
  WebkitTransitionProperty: 'all',
  WebkitTransitionDuration: '0.3s',
  WebkitTransitionTimingFunction: 'ease',
  display: 'block',
  zIndex: 999,

  ':hover': {
    '@media (min-width:350px)': {
      transform: 'scale(3)',
      transformOrigin: 'left bottom',
    },
  },
}));

const LineContact = () => {
  const { t } = useTranslation();
  const handleLineContainerClick = useCallback(() => {
    window.open(lineAddFriendUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <StyledLineContactWrapper>
      <StyledLineQRImage src="/assets/images/friend-siriyakorn-line-qr.jpg" alt="Line QR" width={10} height={10} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx={2}
        width="100%"
        position="relative"
        onClick={handleLineContainerClick}
      >
        <Ribbon>
          <span>{t('forWorkOnly')}</span>
        </Ribbon>
        <StyledLineText>{t('line')}</StyledLineText>
      </Box>
    </StyledLineContactWrapper>
  );
};

export default memo(LineContact);
