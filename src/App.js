import GlobalStyle from './styles/globalStyles';
import {AppRouter} from './routes/AppRouter';
import {connect} from "react-redux";
import {GetProducts} from "./store/products/actions";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        GetProducts()
    }, [])
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, {GetProducts})(App);