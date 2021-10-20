import React from 'react'
import { Switch,Route } from 'react-router';
import styled from 'styled-components'
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Tienda from './components/Tienda';
import Footer from './components/Footer/Footer';
import ProductDetailContainer from './components/Products/ProductDetailContainer';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/cartContext';


const App = () => {
  return (
    <CartProvider>

      <BrowserRouter>
        <Contenedor>
          <Navbar/>
            <Switch>
                <Route exact path="/"  component={Inicio} />
                <Route path="/tienda" component={Tienda} />
                <Route path="/cart" component={Cart} />

                <Route exact path="/detalle/:id">
                  <ProductDetailContainer/>
                </Route>
                <Route path="/" component={Error404} />
            </Switch>
          <Footer/>
        </Contenedor>
      </BrowserRouter>
      
    </CartProvider>
  )
}

const Contenedor = styled.div`
   
    
  
  
    
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App
