import { StyledCardBlur } from '@/common/components/CardBlur';
import useVideoPlayer from '@/common/hooks/useVideoPlayer';
import { Box, Skeleton, styled } from '@mui/material';
import { memo, useMemo } from 'react';

const StyledVideo = styled('video')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));

const StyledVideoWrapper = styled(StyledCardBlur)(() => ({
  padding: 0,
}));

const CatVideo = () => {
  const { vdoElementRef, setFocus, onEndedLoop, canplaythrough } = useVideoPlayer();
  const visibility = useMemo(() => (canplaythrough ? 'visible' : 'hidden'), [canplaythrough]);

  return (
    <Box position="relative" width="100%" height="100%">
      {!canplaythrough && (
        <Box position="absolute" width="100%" height="100%">
          <Skeleton variant="rounded" width="100%" height="100%" sx={{ borderRadius: 3 }} />
        </Box>
      )}
      <StyledVideoWrapper sx={{ visibility }}>
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
    </Box>
  );
};

export default memo(CatVideo);
