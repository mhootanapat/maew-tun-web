import ImageWithFallback from '@/common/components/ImageWithFallback';
import { ICatImageFrame } from '@/common/types/sections/CatImageFrame';
import { Box, Skeleton, Stack, Typography, styled } from '@mui/material';
import { memo, useCallback, useMemo, useState } from 'react';

const transitionUpside = 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)';
const transitionDownSide = 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)';

const StyledImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '.cat-image': {
    height: '100%',
    width: '100%',
    minWidth: '100px',
    objectFit: 'cover',
    filter: 'drop-shadow(2px 4px 6px grey)',
    boxShadow: '10px 15px 25px 0 rgba(0,0,0,.1)',
    transition: transitionUpside,
    borderRadius: theme.spacing(3),
  },

  '.glow-wrap': {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    borderRadius: theme.spacing(3),
  },

  '.glow': {
    position: 'absolute',
    width: '40%',
    height: '200%',
    background: 'rgba(255,255,255,.8)',
    top: 0,
    filter: 'blur(5px)',
    transform: 'rotate(45deg) translate(-450%, 0)',
    transition: transitionUpside,
    borderRadius: theme.spacing(3),
  },

  ':hover .cat-image': {
    boxShadow: '1px 1px 10px 0 rgba(0,0,0,1)',
    marginTop: '-10px',

    '.glow-wrap': {
      marginTop: 0,
    },
  },

  ':hover .glow': {
    transform: 'rotate(45deg) translate(450%, 0)',
    transition: transitionDownSide,
  },

  ':hover .cat-name': {
    marginTop: '80%',
    boxShadow: '-1px 8px 10px -6px rgba(151, 151, 151, 1)',
    '.birthday': {
      display: 'flex',
      animation: 'scaleUpSize 1s ease 0s 1 normal none',
      '@keyframes scaleUpSize': {
        '0%': {
          transform: 'scale(0.5)',
          transformOrigin: ' 50% 0%',
        },
        '100%': {
          transform: 'scale(1)',
          transformOrigin: '50% 0%',
        },
      },
    },
  },
}));

const StyledNameWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  lineHeight: 1.2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: transitionUpside,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1),
  width: '100%',
  backdropFilter: 'blur(1px)',
  backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.8), rgba(255,255,255,0.8))',
  boxShadow: '-1px -6px 10px -6px rgba(151, 151, 151, 1)',

  '.birthday': {
    display: 'none',
  },
}));

const iconWidth = 32;
const iconHeight = 32;

const CatImageFrame = ({ item, pageLoading }: ICatImageFrame) => {
  const { catName, catImgUrl, catBirthDate, skeletonBoxProps } = item;
  const [imgLoading, setImgLoading] = useState(true);
  const loading = useMemo(() => imgLoading || pageLoading, [imgLoading, pageLoading]);
  const visibility = useMemo(() => (!loading ? 'visible' : 'hidden'), [loading]);

  const handleOnLoadImage = useCallback(() => setImgLoading(false), []);

  return (
    <>
      {loading && (
        <Box
          position="absolute"
          display="inline-block"
          width="100%"
          height="100%"
          {...skeletonBoxProps}
          data-testid="cat-frame-skeleton"
        >
          <Skeleton variant="rounded" width="100%" height="100%" sx={{ borderRadius: 3 }} />
        </Box>
      )}
      <StyledImageWrapper sx={{ visibility }}>
        <img src={catImgUrl} alt="cat img" className="cat-image" onLoad={handleOnLoadImage} />
        <div className="glow-wrap">
          <i className="glow" />
        </div>
        <StyledNameWrapper className="cat-name">
          <Typography>{catName}</Typography>
          <Stack direction="row" className="birthday" spacing={1} alignItems="center">
            <ImageWithFallback
              src="/assets/icons/bday-icon.png"
              alt="bday icon"
              width={iconWidth}
              height={iconHeight}
            />
            <Typography variant="body-sm">{catBirthDate}</Typography>
          </Stack>
        </StyledNameWrapper>
      </StyledImageWrapper>
    </>
  );
};

export default memo(CatImageFrame);
