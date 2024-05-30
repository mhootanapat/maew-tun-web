import useScrollDirection from '@/common/hooks/useScrollDirection';
import { INavigationHeader } from '@/common/types/common/components/header/NavigationHeader';
import { getSafeAreaPageTop } from '@/utils/safeAreaStyle';
import { Box, Container, Typography, styled } from '@mui/material';
import { memo } from 'react';

const HeaderComponent = styled(Box)(({ theme }) => ({
  paddingTop: getSafeAreaPageTop(theme.spacing(1)),
  paddingBottom: theme.spacing(1),
  minHeight: 104,
  width: '100%',
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, 0%)',
  zIndex: 10,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '600ms',

  '&.triggered': {
    background: theme.palette.background.transparent,
    backdropFilter: 'blur(6px)',
    boxShadow: theme.shadows[10],
    paddingBottom: theme.spacing(1.5),
  },

  '&.hide': {
    transform: 'translate(-50%, -100%)',
    boxShadow: 'none',
    transitionDuration: '600ms',
  },
}));

const HeaderWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const NavigationHeader = ({ pageTitle, children }: INavigationHeader) => {
  const { isTriggered, scrollClassName } = useScrollDirection();

  return (
    <HeaderComponent className={scrollClassName}>
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
                variant="body1"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                {pageTitle}
              </Typography>
            </Box>
          )}
        </HeaderWrapper>
        {isTriggered && children}
      </Container>
    </HeaderComponent>
  );
};

export default memo(NavigationHeader);
