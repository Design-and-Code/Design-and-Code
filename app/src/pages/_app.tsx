import type { AppProps } from 'next/app';
import { createEmotionCache } from '~/lib/theme';
import NextProgress from 'next-progress';

import { CacheProvider, EmotionCache } from '@emotion/react';

import AppLayout from '../layouts/AppLayout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <AppLayout>
        <NextProgress delay={200} options={{ showSpinner: false }} color="#3BA9FD" />
        <Component {...pageProps} />
      </AppLayout>
    </CacheProvider>
  );
}

export default App;
