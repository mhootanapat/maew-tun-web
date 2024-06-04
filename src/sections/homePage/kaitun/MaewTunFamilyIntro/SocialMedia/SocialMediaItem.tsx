/* eslint-disable no-console */
import ImageWithFallback from '@/common/components/ImageWithFallback';
import { Box, Stack, styled } from '@mui/material';
import { memo } from 'react';

const StyledCircleFrame = styled(Box)(({ theme }) => ({
  width: '90%',
  minHeight: '200px',
  borderRadius: theme.spacing(5),
  background: 'white',
}));

const SocialMediaItem = () => (
  <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
    <Stack direction="row" position="absolute" mt={-25}>
      <ImageWithFallback
        src="/apple-touch-icon.png"
        alt="Maew Tun Logo"
        width={80}
        height={80}
        style={{ borderRadius: '50%' }}
      />
      <ImageWithFallback
        src="/assets/icons/facebook-icon.png"
        alt="Facebook Logo"
        width={80}
        height={80}
        style={{ borderRadius: '50%' }}
      />
    </Stack>
    <StyledCircleFrame />
  </Box>
);

export default memo(SocialMediaItem);
