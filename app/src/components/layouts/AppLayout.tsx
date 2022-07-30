import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import React, { FC, Fragment, PropsWithChildren } from 'react';
import Navbar from '~/components/navbar';
import { NAV_LINKS } from '~/lib/constants';
import { createTheme, darkTheme } from '~/lib/theme';

interface AppLayoutProps extends PropsWithChildren {}

const theme = createTheme(darkTheme);

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <GlobalStyles
        styles={{
          '*': {
            margin: 0,
            fontFamily: 'Poppins, sans-serif',
            textDecoration: 'none',
            boxSizing: 'border-box',
          },
          body: {
            backgroundColor: theme.palette.primary.main,
            overflowX: 'hidden',
          },
        }}
      />
      <Content>{children}</Content>
    </ThemeProvider>
  );
};

const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <Navbar items={NAV_LINKS} />
      {children}
    </Fragment>
  );
};

export default AppLayout;
