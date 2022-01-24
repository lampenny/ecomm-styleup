import {
  Home,
  Cart,
  ProductList,
  Product,
  Login,
  Register,
  Success } from './pages/index';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />}></Route> 
      <Route path="/register" element={<Register />}></Route> 
      
    </Routes>
  </BrowserRouter>
  )
};

export default App;