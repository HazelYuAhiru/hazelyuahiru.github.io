import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getTheme from './styles/theme';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './components/About/AboutPage';
import ResumePage from './components/Resume/ResumePage';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
       </Routes>
       <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
