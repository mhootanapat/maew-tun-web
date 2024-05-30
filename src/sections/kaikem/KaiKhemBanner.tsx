import { StyledParallaxBanner } from '@/common/components/parallax';
import { Box, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BannerLayer } from 'react-scroll-parallax';

const ForegroundOverlay = styled(Box)(() => ({
  background: 'linear-gradient(rgba(14, 62, 151, 0.5) 50%, black)',
  position: 'absolute',
  inset: 0,
}));

const KaiKhemBanner = () => {
  const { t } = useTranslation();

  const background: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 0],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeInCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [30, 0],
    scale: [1, 1.05, 'easeInCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">{t('kaiKhemName')}</h1>
      </div>
    ),
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
