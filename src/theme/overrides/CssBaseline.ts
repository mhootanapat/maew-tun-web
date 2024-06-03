import { SAFE_AREA_BOTTOM, SAFE_AREA_TOP } from '@/common/constants/safeAreaStyle';
import { Components, Theme } from '@mui/material/styles';

const CssBaseline = {
  MuiCssBaseline: {
    styleOverrides: {
      ':root': {
        '--safe-area-top': SAFE_AREA_TOP,
        '--safe-area-bottom': SAFE_AREA_BOTTOM,
      },
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        width: '100%',
        height: '100%',
        WebkitOverflowScrolling: 'touch',
      },
      body: {
        width: '100%',
        height: '100%',
      },
      '#__next': {
        width: '100%',
        height: '100%',
      },
      img: {
        display: 'block',
        maxWidth: '100%',
      },
      '@font-face': {
        fontFamily: 'Kodchasan',
        fontWeight: 400,
        fontStyle: 'normal',
        src: `local('Kodchasan'), url('/fonts/Kodchasan-Regular.ttf') format('truetype')`,
      },
      fallbacks: [
        {
          '@font-face': {
            fontFamily: 'Kodchasan',
            fontWeight: 400,
            fontStyle: 'normal',
            src: `local('Kodchasan'), url('/fonts/Kodchasan-Regular.ttf') format('truetype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kodchasan',
            fontWeight: 500,
            fontStyle: 'normal',
            src: `local('Kodchasan'), url('/fonts/Kodchasan-Medium.ttf') format('truetype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kodchasan',
            fontWeight: 600,
            fontStyle: 'normal',
            src: `local('Kodchasan'), url('/fonts/Kodchasan-SemiBold.ttf') format('truetype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kodchasan',
            fontWeight: 600,
            fontStyle: 'normal',
            src: `local('Kodchasan'), url('/fonts/Kodchasan-Bold.ttf') format('truetype')`,
          },
        },
      ],
    },
  } satisfies Components<Theme>['MuiCssBaseline'],
};

export default CssBaseline;
