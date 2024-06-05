import ImageWithFallback from '@/common/components/ImageWithFallback';
import { MAEW_TUN_INTRO_CARD_SPACING } from '@/sections/homePage/kaitun/MaewTunFamilyIntro/MaewTunFamilyIntro';
import { Box, Typography, styled } from '@mui/material';
import { memo } from 'react';
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

const LineContact = () => {
  const { t } = useTranslation();

  return (
    <StyledLineContactWrapper>
      <Box
        maxHeight={MAEW_TUN_INTRO_LINE_CONTACT_CARD_HEIGHT}
        maxWidth={MAEW_TUN_INTRO_LINE_CONTACT_CARD_HEIGHT}
        borderRadius={(theme) => theme.spacing(3)}
      >
        <ImageWithFallback
          src="/assets/images/friend-siriyakorn-line-qr.jpg"
          alt="Line QR"
          width={10}
          height={10}
          style={{ width: '100%', minWidth: '100px', height: '100%', borderRadius: '24px' }}
        />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mx={2} width="100%">
        <StyledLineText>{t('line')}</StyledLineText>
      </Box>
    </StyledLineContactWrapper>
  );
};

export default memo(LineContact);
