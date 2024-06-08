import { ICatImageFrame } from '@/common/types/sections/CatImageFrame';
import { Typography, styled } from '@mui/material';
import { memo } from 'react';

const transitionDown = 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)';
const transitionUp = 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)';

const StyledImageWrapper = styled('div')(() => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    height: '100%',
    width: '100%',
    minWidth: '100px',
    objectFit: 'cover',
    filter: 'drop-shadow(2px 4px 6px grey)',
    boxShadow: '10px 15px 25px 0 rgba(0,0,0,.2)',
    transition: transitionDown,
    borderRadius: '50%',
  },

  '.glow-wrap': {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    borderRadius: '50%',
  },

  '.glow': {
    position: 'absolute',
    width: '40%',
    height: '200%',
    background: 'rgba(255,255,255,.1)',
    top: 0,
    filter: 'blur(5px)',
    transform: 'rotate(45deg) translate(-450%, 0)',
    transition: transitionDown,
    borderRadius: '50%',
  },

  ':hover img': {
    boxShadow: '1px 1px 10px 0 rgba(0,0,0,.1)',
    marginTop: '-10px',

    '.glow-wrap': {
      marginTop: 0,
    },
  },

  ':hover .glow': {
    transform: 'rotate(45deg) translate(450%, 0)',
    transition: transitionUp,
  },

  ':hover .cat-name': {
    transition: transitionUp,
    marginTop: '80%',
    '.birthday': {
      display: 'block',
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
  transition: transitionDown,
  background: 'white',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1),
  width: '100%',

  '.birthday': {
    display: 'none',
  },

  '.text': {
    fontSize: '1rem',
  },
}));

const CatImageFrame = ({ catName, catImgUrl, catBirthDate }: ICatImageFrame) => (
  <StyledImageWrapper>
    <img src={catImgUrl} alt="cat img" />
    <div className="glow-wrap">
      <i className="glow" />
    </div>
    <StyledNameWrapper className="cat-name">
      <Typography className="text">{catName}</Typography>
      <Typography className="birthday">{catBirthDate}</Typography>
    </StyledNameWrapper>
  </StyledImageWrapper>
);

export default memo(CatImageFrame);
