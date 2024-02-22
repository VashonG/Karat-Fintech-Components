import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import questTheme from './QuestUiKitLightTheme';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
