import GlobalStyle from './styles/globalStyles';
import { AppRouter } from './routes/AppRouter';
import ThemeProvider, { theme } from './styles/utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
