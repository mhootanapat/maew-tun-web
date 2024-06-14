import { Box, Typography, styled } from '@mui/material';
import { memo } from 'react';

interface IThailandFlag {
  size: number;
  langTitle: string;
}
const StyledWrapper = styled(Box)(({ theme }) => ({
  border: `2px solid currentColor`,
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0.5),
}));

function LanguageIcon({ size, langTitle }: IThailandFlag) {
  return (
    <StyledWrapper width={size} height={size}>
      <Typography>{langTitle}</Typography>
    </StyledWrapper>
  );
}

export default memo(LanguageIcon);
