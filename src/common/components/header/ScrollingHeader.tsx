import useScrollDirection from '@/common/hooks/useScrollDirection';
import { IScrollingHeader } from '@/common/types/common/components/header/ScrollingHeader';
import { getSafeAreaPageTop } from '@/utils/safeAreaStyle';
import { Box, Container, Typography, styled } from '@mui/material';
import { memo } from 'react';

const StyledHeader = styled(Box)(({ theme }) => ({
  paddingTop: getSafeAreaPageTop(theme.spacing(1)),
  paddingBottom: theme.spacing(1),
  minHeight: 48,
  width: '100%',
  position: 'fixed',
  top: 0,

  borderRadius: `0 0 ${theme.spacing(3)} ${theme.spacing(3)}`,

  '&.triggered': {
    background: theme.palette.background.navigationHeader,
    backdropFilter: 'blur(6px)',
    boxShadow: theme.shadows[10],
    paddingBottom: theme.spacing(1.5),
    zIndex: 99999,
    opacity: 1,
    transition: 'transform 0.5s ease, opacity 0.5s ease;',
  },

  '&.hide': {
    boxShadow: 'none',
    transition: 'transform 0.5s ease, opacity 0.5s ease;',
    opacity: 0,
  },
}));

const HeaderWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const ScrollingHeader = ({ title = '', children }: IScrollingHeader) => {
  const { isTriggered, scrollClassName } = useScrollDirection({ triggerPosition: 80 });

  return (
    <StyledHeader className={scrollClassName} data-testid="scrolling-header">
      <Container>
        <HeaderWrapper>
          {isTriggered && (
            <Box
              px={8}
              sx={{
                position: 'absolute',
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="body-md"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                {title}
              </Typography>
            </Box>
          )}
        </HeaderWrapper>
        {isTriggered && children}
      </Container>
    </StyledHeader>
  );
};

export default memo(ScrollingHeader);
