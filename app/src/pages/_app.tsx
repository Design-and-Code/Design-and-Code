import { init } from 'aos';
import 'aos/dist/aos.css';
import NextProgress from 'next-progress';
import type { AppProps } from 'next/app';
import { createEmotionCache } from '~/lib/theme';

import { CacheProvider, EmotionCache } from '@emotion/react';

import { useIsomorphicEffect } from '~/hooks/use-isomorphic-effect';
import AppLayout from '../components/layouts/AppLayout';
import { Container } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useIsomorphicEffect(() => {
    init();
  }, []);
  
  return (
    <CacheProvider value={emotionCache}>
      <AppLayout>
        <NextProgress
          delay={200}
          options={{ showSpinner: false }}
          color="#3BA9FD"
        />
        <Container maxWidth={'lg'}>
          <Component {...pageProps} />
        </Container>
      </AppLayout>
    </CacheProvider>
  );
}

export default App;
