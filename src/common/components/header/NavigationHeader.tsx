import ImageWithFallback from '@/common/components/ImageWithFallback';
import PageMenu from '@/common/components/menu/PageMenu';
import PageTabs from '@/common/components/tabs/PageTabs';
import { Skeleton, Stack, useMediaQuery } from '@mui/material';
import { memo, useCallback, useMemo, useState } from 'react';

const navigationHeaderStyle = { zIndex: 9999, mt: -1.5 };

const NavigationHeader = () => {
  const largeScreen = useMediaQuery('(min-width:650px)');
  const [logoLoading, setLogoLoading] = useState(true);
  const [textLogoLoading, setTextLogoLoading] = useState(true);
  const loading = useMemo(() => logoLoading || textLogoLoading, [logoLoading, textLogoLoading]);
  const visibility = useMemo(() => (!loading ? 'visible' : 'hidden'), [loading]);

  const handleLoadedLogo = useCallback(() => {
    setLogoLoading(false);
  }, []);
  const handleTextLoadedLogo = useCallback(() => {
    setTextLogoLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          position="absolute"
          width="100%"
          height={80}
        >
          <Skeleton variant="rounded" width={200} height={50} sx={{ ml: 2, borderRadius: 3 }} />
          <Skeleton variant="rounded" width={300} height={50} sx={{ mr: 2, borderRadius: 3 }} />
        </Stack>
      )}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={80}
        mx={2}
        visibility={visibility}
      >
        <Stack direction="row" spacing={-2}>
          <ImageWithFallback
            src="/apple-touch-icon.png"
            alt="Maew Tun Logo"
            width={50}
            height={50}
            style={{ minWidth: '50px', minHeight: '50px' }}
            onLoad={handleLoadedLogo}
            loading="eager"
          />
          <ImageWithFallback
            src="/assets/images/maew-tun-text-image.png"
            alt="Maew Tun Text Logo"
            width={150}
            height={50}
            style={{ minWidth: '150px', minHeight: '50px' }}
            onLoad={handleTextLoadedLogo}
            loading="eager"
          />
        </Stack>
        {largeScreen ? <PageTabs sxProps={navigationHeaderStyle} /> : <PageMenu boxProps={navigationHeaderStyle} />}
      </Stack>
    </>
  );
};

export default memo(NavigationHeader);
