import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/light/Header';
import LandingPage from './components/light/LandingPage';
import About from './components/light/About';

const AppContainer = styled.div``;

const App = () => (
  <AppContainer>
    <GlobalStyles />
    <Header />
    <LandingPage />
    <About />
  </AppContainer>
);

export default App;
