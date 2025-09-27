import {Provider} from "react-redux";
import {store} from "./store";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
