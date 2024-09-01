import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getTheme from './styles/theme';
import ThemeGlobalStyles from './styles/ThemeGlobalStyles';
import Footer from './pages/Footer';
import Header from './pages/Header';
import AboutPage from './pages/About/AboutPage';
import ResumePage from './pages/Resume/ResumePage';
import HomePage from './pages/Home/HomePage';
import ScrollToTop from "./pages/ScrollToTop";
import { Box } from '@mui/material';

function App() {
  const themeMode = 'light';
  // TODO: Implement theme toggling
  // const [themeMode, setThemeMode] = useState('light');
  // const toggleTheme = () => {
  //   setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  // };

  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <ThemeGlobalStyles />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <ScrollToTop />
          <Box>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;