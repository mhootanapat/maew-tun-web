import ImageWithFallback from '@/common/components/ImageWithFallback';
import PageMenu from '@/common/components/menu/PageMenu';
import PageTabs from '@/common/components/tabs/PageTabs';
import { Stack, useMediaQuery } from '@mui/material';
import { memo } from 'react';

const NavigationHeader = () => {
  const largeScreen = useMediaQuery('(min-width:650px)');

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" ml={2} height={80}>
      <Stack direction="row" alignItems="center" spacing={0}>
        <ImageWithFallback src="/apple-touch-icon.png" alt="Maew Tun Logo" width={50} height={50} />
        <ImageWithFallback
          src="/assets/images/maew-tun-text-image.png"
          alt="Maew Tun Text Logo"
          width={150}
          height={50}
        />
      </Stack>
      {largeScreen ? <PageTabs sxProps={{ zIndex: 9999 }} /> : <PageMenu boxProps={{ zIndex: 9999 }} />}
    </Stack>
  );
};

export default memo(NavigationHeader);
