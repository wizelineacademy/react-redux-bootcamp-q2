import GlobalStyle from './styles/globalStyles';
import { AppRouter } from './routes/AppRouter';
import ThemeProvider, { theme } from './styles/utils/theme';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
