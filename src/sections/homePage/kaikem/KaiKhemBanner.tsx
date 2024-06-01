import { StyledParallaxBanner } from '@/common/components/Parallax';
import KaiKhemHeadline from '@/sections/homePage/kaikem/KaiKhemHeadline';
import { Box, styled } from '@mui/material';
import { memo } from 'react';
import { BannerLayer } from 'react-scroll-parallax';

const ForegroundOverlay = styled(Box)(() => ({
  background: 'linear-gradient(rgba(14, 62, 151, 0.5) 50%, black)',
  position: 'absolute',
  inset: 0,
}));

const KaiKhemBanner = () => {
  const background: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 50],
    opacity: [0.5, 2],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateX: [-50, 50],
    scale: [1, 1.05, 'easeInCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <KaiKhemHeadline />,
  };

  const foreground: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateX: [0, 50],
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

export default memo(KaiKhemBanner);
