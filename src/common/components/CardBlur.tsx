import { Card, alpha, styled } from '@mui/material';

export const StyledCardBlur = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: `0px 12px 24px 0px ${alpha('#000', 0.15)}`,
  backdropFilter: 'blur(10px)',
  background: theme.palette.background.transparent[90],
  height: '100%',
  width: '100%',
  borderRadius: theme.spacing(3),
}));
