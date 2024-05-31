import { Props } from '@/common/types/pages/app';
import theme from '@/theme';
import createEmotionCache from '@/utils/createEmotionCache';
import '@/utils/i18n';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { t } from 'i18next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ReactNode } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // NOTE: for dynamic layouts
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <title>{t('webTitle')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <ParallaxProvider>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ParallaxProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
