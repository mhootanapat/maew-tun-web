import { StyledParallaxBanner } from '@/common/components/Parallax';
import KaiTunHeadLine from '@/sections/homePage/kaitun/KaiTunHeadline';
import { Box, styled } from '@mui/material';
import { memo } from 'react';
import { BannerLayer } from 'react-scroll-parallax';

const ForegroundOverlay = styled(Box)(() => ({
  background: 'linear-gradient(rgba(14, 62, 151, 0.5) 50%, black)',
  position: 'absolute',
  inset: 0,
}));

const KaiTunBanner = () => {
  const background: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [-30, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <KaiTunHeadLine />,
  };

  const foreground: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <ForegroundOverlay />,
  };

  return <StyledParallaxBanner layers={[background, headline, foreground, gradientOverlay]} />;
};

export default memo(KaiTunBanner);
