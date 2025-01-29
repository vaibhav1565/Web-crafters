import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList"
import Home from "./Components/Home";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
};

export default App;