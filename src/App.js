import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/Home/LandingPage';
import About from './components/About';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <LandingPage />
    <About />
    <Footer />
  </ThemeProvider>
);

export default App;
