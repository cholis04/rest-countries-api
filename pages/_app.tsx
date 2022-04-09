import type { AppProps } from 'next/app';

import MainLayout from '../layouts/MainLayout';

import ThemeModeProvider from '../context/ModeContext';
import { GlobalStyle } from '../styles/globalStyle';
import FilterProvider from '../context/FilterContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeModeProvider>
        <GlobalStyle />
        <MainLayout>
          <FilterProvider>
            <Component {...pageProps} />
          </FilterProvider>
        </MainLayout>
      </ThemeModeProvider>
    </>
  );
}

export default MyApp;
