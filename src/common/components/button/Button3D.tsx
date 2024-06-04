import { Typography, styled } from '@mui/material';
import { memo } from 'react';

const Styled3DButton = styled('button')(() => ({
  position: 'relative',
  border: 'none',
  background: 'transparent',
  padding: 0,
  cursor: 'pointer',
  outlineOffset: '4px',
  transition: 'filter 250ms',

  ':hover': {
    filter: 'brightness(110%)',
  },

  ':hover .front': {
    transform: 'translateY(-6px)',
    transition: 'transform 250ms cubic-bezier(.3, .7, .4, 1.5)',
  },

  ':active .front': {
    transform: 'translateY(-2px)',
    transition: 'transform 34ms',
  },

  ':hover .shadow': {
    transform: 'translateY(4px)',
    transition: 'transform 250ms cubic-bezier(.3, .7, .4, 1.5)',
  },

  ':active .shadow': {
    transform: 'translateY(1px)',
    transition: 'transform 34ms',
  },

  ':focus:not(:focus-visible)': {
    outline: 'none',
  },
}));

const StyledButtonShadow = styled('span')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  background: 'hsl(0deg 0% 0% / 0.25)',
  willChange: 'transform',
  transform: 'translateY(2px)',
  transition: 'transform 600ms cubic-bezier(.3, .7, .4, 1)',
}));

const StyledButtonEdge = styled('span')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  background:
    'linear-gradient(to left, hsl(16.82deg 74.42% 17.28%) 0%, hsl(33.85deg 100% 32%) 8%, hsl(34.85deg 100% 32%) 92%, hsl(16.82deg 74.42% 17.28%) 100%)',
}));

const StyledButtonText = styled(Typography)(() => ({
  display: 'block',
  position: 'relative',
  padding: '12px 42px',
  borderRadius: '12px',
  fontSize: '1.25rem',
  color: 'white',
  background: 'hsl(32deg 43.91% 58.5%);',
  willChange: 'transform',
  transform: 'translateY(-4px)',
  transition: 'transform 600ms cubic-bezier(.3, .7, .4, 1)',
}));

interface IButton3D {
  text: string;
  onClick: () => void;
}
const Button3D = ({ text, onClick }: IButton3D) => (
  <Styled3DButton onClick={onClick}>
    <StyledButtonShadow className="shadow" />
    <StyledButtonEdge className="edge" />
    <StyledButtonText className="front">{text}</StyledButtonText>
  </Styled3DButton>
);

export default memo(Button3D);
