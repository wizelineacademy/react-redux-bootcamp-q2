import GlobalStyle from "./styles/globalStyles";
import { AppRouter } from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<AppRouter />
		</Provider>
	);
}

export default App;
