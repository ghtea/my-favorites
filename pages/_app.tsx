import type { AppProps } from 'next/app';
import '../styles/globals.css';
//import 'libraries/fontawesome';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/bu-GlobalStyle';
import {lightTheme} from 'styles/theme';
//import theme from '@rebass/preset';

import { useEffect } from 'react';
 
function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
