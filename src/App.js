import React from 'react'
import { Switch,Route } from 'react-router';
import styled from 'styled-components'
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/cartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer';
import Category from './components/Products/Category';
import NavCat from './components/Stateless/NavCat';

const App = () => {
  return (
    <CartProvider>

      <BrowserRouter>
        <Contenedor>
          <Navbar/>
          <NavCat/>
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/home"  component={Inicio} />
                <Route exact path="/detalle/:id">
                  <ItemDetailContainer/>

                </Route>
                <Route exact path="/categoria/:categoria">
                  <Category/>
                </Route>
                <Route path="/cart" component={Cart} />

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
