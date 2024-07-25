import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DashboardAdmin from './views/DashboardAdmin/DashboardAdmin';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Modal from 'react-modal';
import Home from './views/Home/Home';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CreateProduct from './components/CreateProduct/CreateProduct';
import ModifyProduct from './components/ModifyProduct/ModifyProduct';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './views/ProductDetail/ProductDetail';
import ProductList from './views/ProductList/ProductList';
import ProductSearch from './views/ProductSearch/ProductSearch';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './components/Cart/Cart';
import SidebarCart from './components/SidebarCart/SidebarCart';
import CarouselBanner from './components/CarouselBanner/CarouselBanner';
import BannerDeliver from './components/BannerDeliver/BannerDeliver';
import SessionManager from './components/SessionManager/SessionManager';
import TypeProductList from './components/TypeProductList/TypeProductList';
import products from './data/products.json';

Modal.setAppElement('#root');


function App() {
  const accesoriosProducts = products.filter(product => product.model.toLowerCase() === 'accesorios');
  const mueblesProducts = products.filter(product => product.model === 'Muebles');
  console.log(mueblesProducts)
  return (
    <div className="App">
      <Provider store={store}>

      
      <NavBar />
      <CarouselBanner />
      <Routes>
        
            <Route path="/" element={<Home  />} />
            <Route path="/dashboardadmin" element={<DashboardAdmin />} />
            <Route path="/login" element={<SessionManager />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createproduct" element={<CreateProduct />} />
            <Route path="/modifyproduct" element={<ModifyProduct />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<ProductSearch />} />
            <Route path="/muebles" element={<ProductList model="Muebles" products={mueblesProducts} />} />
            <Route path="/accesorios" element={<ProductList model="Accesorios" products={accesoriosProducts} />} />
            <Route path="/bano" element={<TypeProductList type="Baño" />} />
            <Route path="/cocina" element={<TypeProductList type="Cocina" />} />
            <Route path='*' element={<ErrorPage />} />
        
      </Routes>
      <BannerDeliver />
      <SidebarCart />
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
