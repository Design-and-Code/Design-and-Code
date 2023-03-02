import createEmotionServer from '@emotion/server/create-instance';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { createEmotionCache, darkTheme as theme } from '~/lib/theme';

/*   
  the title variable will be set to the text content of the 
  title tag if it exists, or to a default value of "Design and Code" if it doesn't.
*/  
const { head } = initialProps;
const titleElement = head.find((h) => h.type === 'title');
const title = titleElement ? titleElement.props.children : 'Design and Code';

/* get page title and set to meta content */
const metaTitle = document.title;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          <App emotionCache={cache} {...props} />
      });

    const initialProps = await Document.getInitialProps(ctx);

    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="emotion-insertion-point" content="" />
          {/* <!-- Primary Meta Tags --> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Design and Code a global community where anyone can learn and network with fellow developers and designers." />
          {/* <!-- Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.designandcode.us/" />
          <meta property="og:title" content="Home | Design and Code" />
          <meta property="og:description" content="Design and Code a global community where anyone can learn and network with fellow developers and designers." />
          <meta property="og:image" content="static\branding-logos\branding-transparent-logo.svg" />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.designandcode.us/" />
          <meta property="twitter:title" content="Home | Design and Code" />
          <meta property="twitter:description" content="Design and Code a global community where anyone can learn and network with fellow developers and designers." />
          <meta property="twitter:image" content="static\branding-logos\branding-transparent-logo.svg" />
          {/* <!-- SEO Tags --> */}
          <meta name="language" content="EN" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Home | Design and Code" />
          <meta name="url" content="https://www.designandcode.us/" />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta content="yes" name="apple-touch-fullscreen" />
          <meta name="copyright" content="Home | Design and Code" />
          {/* <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the `public` folder during the build.
              Only files inside the `public` folder can be referenced from the HTML.
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running `npm run build`.
          -->
          <!-- Favicons for different devices --> */}
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          {/* <!--
              site.webmanifest provides metadata used when your web app is installed on a
              user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          --> */}
          <link rel="manifest" href="favicon/site.webmanifest" />
 
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap"
            rel="stylesheet"
          />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};