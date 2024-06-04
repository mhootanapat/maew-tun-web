/* eslint-disable no-console */
import ImageWithFallback from '@/common/components/ImageWithFallback';
import { ISocialMediaItem } from '@/common/types/sections/SocialMediaItem';
import { Box, Button, Stack, Typography, styled } from '@mui/material';
import { CSSProperties, memo } from 'react';

const imageStyle: CSSProperties = { borderRadius: '50%', boxShadow: '0px 4px 13px 5px rgba(172, 172, 172, 0.5)' };
const imageWidth = 80;
const imageHeight = 80;

const StyledCircleFrame = styled(Box)(({ theme }) => ({
  width: '90%',
  minHeight: '100px',
  borderRadius: theme.spacing(3),
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledSocialMediaName = styled(Typography)(() => ({
  fontSize: '24px',
  '@media (max-width:515px)': {
    fontSize: '20px',
  },
  '@media (max-width:415px)': {
    fontSize: '16px',
  },
}));

const StyledSocialMediaButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  ':hover': {
    filter: 'brightness(110%)',
    transform: 'translateY(-6px)',
    transition: 'transform 250ms cubic-bezier(.3, .7, .4, 1.5)',
  },

  ':active': {
    transform: 'translateY(-2px)',
    transition: 'transform 34ms',
  },
}));

const SocialMediaItem = ({ iconPath, altValue, platformName, borderColor }: ISocialMediaItem) => (
  <StyledSocialMediaButton disableRipple>
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
      <Stack direction="row" position="absolute" mt={-12.5}>
        <ImageWithFallback
          src="/apple-touch-icon.png"
          alt="Maew Tun Logo"
          width={imageWidth}
          height={imageHeight}
          style={imageStyle}
        />
        <ImageWithFallback src={iconPath} alt={altValue} width={imageWidth} height={imageHeight} style={imageStyle} />
      </Stack>
      <StyledCircleFrame border={`8px ridge ${borderColor}`}>
        <StyledSocialMediaName mt={3}>{platformName}</StyledSocialMediaName>
      </StyledCircleFrame>
    </Box>
  </StyledSocialMediaButton>
);

export default memo(SocialMediaItem);
