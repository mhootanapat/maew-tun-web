import SCROLL_DIRECTION from '@/common/enums/scrollDirection';
import useScrollDirection from '@/common/hooks/useScrollDirection';
import { IScrollingHeader } from '@/common/types/common/components/header/ScrollingHeader';
import { Box, Container, Typography, styled } from '@mui/material';
import { memo, useMemo } from 'react';

const StyledHeader = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
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
    zIndex: -1,
  },
}));

const HeaderWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const ScrollingHeader = ({ title = '', children }: IScrollingHeader) => {
  const { isTriggered, scrollClassName, scrollDirection } = useScrollDirection({ triggerPosition: 50 });
  const opacity = useMemo(
    () => (isTriggered && scrollDirection !== SCROLL_DIRECTION.DOWN ? 1 : 0),
    [isTriggered, scrollDirection]
  ); // NOTE: To avoid reload asset on header when remove component

  return (
    <StyledHeader className={scrollClassName} sx={{ opacity }} data-testid="scrolling-header">
      <Container data-testid="scrolling-header-container">
        <HeaderWrapper>
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
        </HeaderWrapper>
        {children}
      </Container>
    </StyledHeader>
  );
};

export default memo(ScrollingHeader);
