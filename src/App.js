import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/light/Header';
import LandingPage from './components/light/Home/LandingPage';
import About from './components/light/About';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <LandingPage />
    <About />
  </ThemeProvider>
);

export default App;
