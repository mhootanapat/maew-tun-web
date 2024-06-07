import { Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const StyledImageWrapper = styled('div')(() => ({
  position: 'relative',
  height: '100%',
  width: '100%',

  img: {
    height: '100%',
    width: '100%',
    minWidth: '100px',
    objectFit: 'cover',
    filter: 'drop-shadow(2px 4px 6px grey)',
    boxShadow: '10px 15px 25px 0 rgba(0,0,0,.2)',
    transition: 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)',
    borderRadius: '50%',
  },

  ':hover img': {
    boxShadow: '1px 1px 10px 0 rgba(0,0,0,.1)',
    marginTop: '-10px',

    '.glow-wrap': {
      marginTop: 0,
    },
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
    background: 'rgba(255,255,255,.2)',
    top: 0,
    filter: 'blur(5px)',
    transform: 'rotate(45deg) translate(-450%, 0)',
    transition: 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)',
    borderRadius: '50%',
  },

  ':hover .glow': {
    transform: 'rotate(45deg) translate(450%, 0)',
    transition: 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
}));

const StyledName = styled(Typography)(() => ({
  position: 'absolute',
  zIndex: 1,
  transform: 'translate(-25%, -65%)',
  margin: 0,
  lineHeight: 1.2,
}));

const CatImageFrame = () => {
  const { t } = useTranslation();

  return (
    <StyledImageWrapper>
      <StyledName>{t('kaiTunName')}</StyledName>
      <img src="/assets/icons/facebook-icon.png" alt="test" />
      <div className="glow-wrap">
        <i className="glow" />
      </div>
    </StyledImageWrapper>
  );
};

export default memo(CatImageFrame);
