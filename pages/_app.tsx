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

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // NOTE: for dynamic layouts
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <title>{t('webTitle')}</title>

        <meta charSet="utf-8" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
