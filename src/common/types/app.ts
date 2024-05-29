import { NextPage } from 'next';
import { ComponentType, ReactNode } from 'react';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';


export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page?: ReactNode) => ReactNode;
  layout?: ComponentType;
};

export interface Props extends AppProps {
  Component: Page;
  emotionCache?: EmotionCache;
}