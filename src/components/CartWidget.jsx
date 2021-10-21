import React from 'react'
import { AiFillShopping } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const CartWidget = () => {
    
    const {cartList,total} = useCartContext()
    
     
  
    

    return (
       <>
           {cartList.length > 0 ?
           <NavLink className="position-absolute" style={{ right: 100 }} exact to="/cart" ><AiFillShopping size="40" color="white" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {total}
              </span>
           </NavLink>
           :
           <div>X</div>

           }
       </>
    )
}

export default CartWidget
