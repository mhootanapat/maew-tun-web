import { Components, Theme } from '@mui/material/styles';

const Container = {
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.up('sm')]: {
          paddingLeft: 16,
          paddingRight: 16,
        },
        [theme.breakpoints.up('md')]: {
          paddingLeft: 16,
          paddingRight: 16,
        },
        [theme.breakpoints.up('lg')]: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      }),
    },
  } satisfies Components<Theme>['MuiContainer'],
};

export default Container;
