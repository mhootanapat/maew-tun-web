import { StyledCardBlur } from '@/common/components/CardBlur';
import useVideoPlayer from '@/common/hooks/useVideoPlayer';
import { Box, Card, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const StyledVideo = styled('video')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));

export const StyledVideoWrapper = styled(Card)(({ theme }) => ({
  width: '50%',
  height: '100%',
  padding: 0,
  borderRadius: theme.spacing(3),
  flex: '1 0 50%',
}));

export const StyledDetailWrapper = styled(Box)(() => ({
  flex: '1 0 50%',
}));

const MaewTunFamilyIntro = () => {
  const { t } = useTranslation();
  const { vdoElementRef, setFocus, onEndedLoop } = useVideoPlayer();
  const largeScreen = useMediaQuery('(min-width:650px)');

  return (
    <Stack mx={3} mb={3}>
      <StyledCardBlur sx={{ height: '100vh', padding: 0 }}>
        <Stack direction="row" height="100%">
          <StyledDetailWrapper>
            <Stack alignItems="center" m={3}>
              <Typography variant="h1" color={(theme) => theme.palette.text.primary}>
                {t('webTitle')}
              </Typography>
            </Stack>
          </StyledDetailWrapper>
          {largeScreen && (
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
          )}
        </Stack>
      </StyledCardBlur>
    </Stack>
  );
};

export default memo(MaewTunFamilyIntro);
