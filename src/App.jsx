import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Box } from '@mui/material';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        background: {
          default: mode === 'light' ? '#fff' : '#181818',
          paper: mode === 'light' ? '#fff' : '#232323',
        },
        text: {
          primary: mode === 'light' ? '#000' : '#fff',
          secondary: mode === 'light' ? '#666' : '#bbb',
        },
      },
      typography: {
        fontFamily: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
      },
    }), [mode]
  );

  const handleToggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} onToggleTheme={handleToggleTheme} />
      <Box sx={{ pt: 7 }}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
