/* eslint-disable i18next/no-literal-string */
import { StyledCardBlur } from '@/common/components/CardBlur';
import useVideoPlayer from '@/common/hooks/useVideoPlayer';
import { Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const CARD_SPACING = 4;

//#region Page Name
const StyledPageNameWrapper = styled(StyledCardBlur)(() => ({
  maxHeight: '250px',
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledPageNameTypography = styled(Typography)(() => ({
  fontSize: '72px',
  '@media (max-width:455px)': {
    fontSize: '56px',
  },
}));
//#endregion Page Name

const StyledContactWrapper = styled(StyledCardBlur)(() => ({}));

const StyledLineContactWrapper = styled(StyledCardBlur)(() => ({
  maxHeight: '200px',
  flex: 'auto',
}));

const StyledImageWrapper = styled(StyledCardBlur)(() => ({
  padding: 0,
  maxHeight: '230px',
}));

//#region Video
const StyledVideo = styled('video')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));

const StyledVideoWrapper = styled(StyledCardBlur)(() => ({
  padding: 0,
}));
//#endregion Video

const MaewTunFamilyIntro = () => {
  const { t } = useTranslation();
  const { vdoElementRef, setFocus, onEndedLoop } = useVideoPlayer();

  return (
    <Stack
      direction="row"
      mx={CARD_SPACING}
      mb={CARD_SPACING}
      mt={CARD_SPACING - 2}
      height="100vh"
      flexWrap="wrap"
      gap={CARD_SPACING}
    >
      <Stack spacing={CARD_SPACING} flex={1}>
        <StyledPageNameWrapper>
          <Stack alignItems="center" whiteSpace="nowrap">
            <StyledPageNameTypography>{t('webTitle')}</StyledPageNameTypography>
            <Typography variant="h6" color="text.primary">
              {t('greeting')}
            </Typography>
          </Stack>
        </StyledPageNameWrapper>

        <StyledContactWrapper>
          <Typography variant="h3" color="text.primary">
            contact
          </Typography>
        </StyledContactWrapper>

        <StyledLineContactWrapper>
          <Typography variant="h3" color="text.primary">
            line
          </Typography>
        </StyledLineContactWrapper>
      </Stack>

      <Stack flex={1}>
        <Stack direction="row">
          <StyledImageWrapper sx={{ mr: CARD_SPACING, mb: CARD_SPACING }}>
            <Typography variant="h3" color="text.primary">
              tun image
            </Typography>
          </StyledImageWrapper>
          <StyledImageWrapper>
            <Typography variant="h3" color="text.primary">
              khem image
            </Typography>
          </StyledImageWrapper>
        </Stack>

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
      </Stack>
    </Stack>
  );
};

export default memo(MaewTunFamilyIntro);
