import Head from 'next/head';
import '@/utils/i18n';
import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { Props } from '@/common/types/app';
import { t } from 'i18next';
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import dynamic from 'next/dynamic';

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  // NOTE: prepare for dynamic layouts
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
        <Head>
          <title>{t('pageTitle')}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        </Head>
        <CacheProvider value={emotionCache}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </CacheProvider>
    </>
  );
};
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
});
