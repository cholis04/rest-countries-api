import type { AppProps } from 'next/app';

import MainLayout from '../layouts/MainLayout';

import ThemeModeProvider from '../context/ModeContext';
import { GlobalStyle } from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeModeProvider>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeModeProvider>
    </>
  );
}

export default MyApp;
