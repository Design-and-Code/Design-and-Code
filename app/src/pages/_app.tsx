import type { AppProps } from 'next/app';
import { createEmotionCache } from '~/lib/theme';

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
        <Component {...pageProps} />
      </AppLayout>
    </CacheProvider>
  );
}

export default App;
