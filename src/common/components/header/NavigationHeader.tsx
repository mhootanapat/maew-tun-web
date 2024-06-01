import ImageWithFallback from '@/common/components/ImageWithFallback';
import PageTabs from '@/common/components/tabs/PageTabs';
import { Stack } from '@mui/material';
import { memo } from 'react';

const NavigationHeader = () => (
  <Stack direction="row" alignItems="center" justifyContent="space-between" ml={2}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <ImageWithFallback src="/apple-touch-icon.png" alt="Maew Tun Logo" width={40} height={40} />
      <ImageWithFallback
        src="/assets/images/maew-tun-text-image.png"
        alt="Maew Tun Text Logo"
        width={150}
        height={50}
      />
    </Stack>
    <PageTabs isLoading={false} sxProps={{ zIndex: 9999 }} />
  </Stack>
);

export default memo(NavigationHeader);
