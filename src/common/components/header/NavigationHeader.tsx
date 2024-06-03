import ImageWithFallback from '@/common/components/ImageWithFallback';
import PageMenu from '@/common/components/menu/PageMenu';
import PageTabs from '@/common/components/tabs/PageTabs';
import { Stack, useMediaQuery } from '@mui/material';
import { memo } from 'react';

const navigationHeaderStyle = { zIndex: 9999, mt: -1.5 };

const NavigationHeader = () => {
  const largeScreen = useMediaQuery('(min-width:650px)');

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" height={80} mx={2}>
      <Stack direction="row" spacing={-2}>
        <ImageWithFallback
          src="/apple-touch-icon.png"
          alt="Maew Tun Logo"
          width={50}
          height={50}
          style={{ minWidth: '50px', minHeight: '50px' }}
        />
        <ImageWithFallback
          src="/assets/images/maew-tun-text-image.png"
          alt="Maew Tun Text Logo"
          width={150}
          height={50}
          style={{ minWidth: '150px', minHeight: '50px' }}
        />
      </Stack>
      {largeScreen ? <PageTabs sxProps={navigationHeaderStyle} /> : <PageMenu boxProps={navigationHeaderStyle} />}
    </Stack>
  );
};

export default memo(NavigationHeader);
