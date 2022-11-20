import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { CTAScrollToTop } from './components/Buttons/CTAScrollToTop';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CTAScrollToTop />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
