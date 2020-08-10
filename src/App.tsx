import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';

import Main from './pages/Main';

import useTheme from './hooks/theme';

function App() {

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
