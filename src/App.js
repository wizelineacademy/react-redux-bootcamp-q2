import GlobalStyle from './styles/globalStyles';
import {AppRouter} from './routes/AppRouter';
import UserData from './components/UserData';

function App() {
  return (
    <UserData>
      <GlobalStyle />
      <AppRouter />
    </UserData>
  );
}

export default App;
