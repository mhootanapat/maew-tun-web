/* eslint-disable i18next/no-literal-string */
import { StyledCardBlur } from '@/common/components/CardBlur';
import useVideoPlayer from '@/common/hooks/useVideoPlayer';
import SocialMedia from '@/sections/homePage/kaitun/MaewTunFamilyIntro/SocialMedia/SocialMedia';
import { Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const CARD_SPACING = 3;

//#region Page Name Styled
const StyledPageNameWrapper = styled(StyledCardBlur)(() => ({
  maxHeight: '200px',
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `conic-gradient(at 78% 3%,#0000 75%,#F6E2B2 0),
  conic-gradient(at 78% 3%,#0000 75%,#F6E2B2 0) 40px 40px,
  conic-gradient(at 78% 3%,#0000 75%,#F6E2B2 0) calc(2*40px) calc(2*40px),
  conic-gradient(at 78% 3%,#0000 75%,#F6E2B2 0) calc(3*40px) calc(3*40px),
  conic-gradient(at 3% 78%,#0000 75%,#F6E2B2 0) 0 calc(3*40px),
  conic-gradient(at 3% 78%,#0000 75%,#F6E2B2 0) 40px 0,
  conic-gradient(at 3% 78%,#0000 75%,#F6E2B2 0) calc(2*40px) 40px,
  conic-gradient(at 3% 78%,#0000 75%,#F6E2B2 0) calc(3*40px) calc(2*40px)
  #FFFFFF`,
  backgroundSize: `calc(4*40px) calc(4*40px)`,
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
//#endregion  Page Name Styled

const StyledLineContactWrapper = styled(StyledCardBlur)(() => ({
  maxHeight: '100px',
  flex: 'auto',
}));

const StyledImageWrapper = styled(StyledCardBlur)(() => ({
  padding: 0,
  maxHeight: '230px',
}));

//#region Video Styled
const StyledVideo = styled('video')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));

const StyledVideoWrapper = styled(StyledCardBlur)(() => ({
  padding: 0,
  maxHeight: '800px',
}));
//#endregion Video Styled

const MaewTunFamilyIntro = () => {
  const { t } = useTranslation();
  const { vdoElementRef, setFocus, onEndedLoop } = useVideoPlayer();

  return (
    <Stack direction="row" mx={CARD_SPACING} mt={CARD_SPACING - 2} mb={CARD_SPACING} flexWrap="wrap" gap={CARD_SPACING}>
      <Stack spacing={CARD_SPACING} flex={1}>
        {
          // #region Page Name
        }
        <StyledPageNameWrapper>
          <Stack alignItems="center" whiteSpace="nowrap">
            <StyledPageNameTypography>{t('webTitle')}</StyledPageNameTypography>
            <Typography variant="body-bold-md" color="text.primary">
              {t('greeting')}
            </Typography>
          </Stack>
        </StyledPageNameWrapper>
        {
          // #endregion Page Name
        }

        {
          // #region Social Media
        }
        <SocialMedia />
        {
          // #endregion Social Media
        }

        {
          // #region Line contact
        }
        <StyledLineContactWrapper>
          <Typography variant="heading-bold-xl" color="text.primary">
            line
          </Typography>
        </StyledLineContactWrapper>
      </Stack>
      {
        // #endregion Line contact
      }

      {
        // #region Cat Image
      }
      <Stack flex={1}>
        <Stack direction="row" mb={CARD_SPACING}>
          <StyledImageWrapper sx={{ mr: CARD_SPACING, mb: CARD_SPACING }}>
            <Typography variant="heading-bold-xl" color="text.primary">
              tun image
            </Typography>
          </StyledImageWrapper>
          <StyledImageWrapper>
            <Typography variant="heading-bold-xl" color="text.primary">
              khem image
            </Typography>
          </StyledImageWrapper>
        </Stack>
        {
          // #endregion Cat Image
        }

        {
          // #region Video
        }
        <StyledVideoWrapper>
          <StyledVideo
            ref={vdoElementRef}
            onMouseOver={() => setFocus(true)}
            onMouseOut={() => setFocus(false)}
            src="/assets/videos/tun-khem-profile-video.mp4"
            onEnded={onEndedLoop}
            autoPlay
            muted
          />
        </StyledVideoWrapper>
        {
          // #region Video
        }
      </Stack>
    </Stack>
  );
};

export default memo(MaewTunFamilyIntro);
