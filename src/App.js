import GlobalStyle from './styles/globalStyles';
import { AppRouter } from './routes/AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
}

export default App;
