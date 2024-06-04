/* eslint-disable no-console */
import ImageWithFallback from '@/common/components/ImageWithFallback';
import { ISocialMediaItem } from '@/common/types/sections/SocialMediaItem';
import { Box, Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';

const StyledCircleFrame = styled(Box)(({ theme }) => ({
  width: '90%',
  minHeight: '100px',
  borderRadius: theme.spacing(3),
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SocialMediaItem = ({ iconPath, altValue, platformName }: ISocialMediaItem) => (
  <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
    <Stack direction="row" position="absolute" mt={-12.5}>
      <ImageWithFallback
        src="/apple-touch-icon.png"
        alt="Maew Tun Logo"
        width={80}
        height={80}
        style={{ borderRadius: '50%' }}
      />
      <ImageWithFallback src={iconPath} alt={altValue} width={80} height={80} style={{ borderRadius: '50%' }} />
    </Stack>
    <StyledCircleFrame>
      <Typography mt={3}>{platformName}</Typography>
    </StyledCircleFrame>
  </Box>
);

export default memo(SocialMediaItem);
