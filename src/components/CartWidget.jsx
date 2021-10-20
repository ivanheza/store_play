import React, { useEffect } from 'react'
import { AiFillShopping } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const CartWidget = () => {
    
    const {cartList} = useCartContext()
    
    
      let prueba;    
      const total = ()=> {
          
      return prueba =  cartList.reduce((sum,value)=> (typeof value.cantidad == "number" ? sum+value.cantidad : sum),0)
        
    }

      
    
    
    total()
    useEffect(() => {
    }, [])
    

    return (
       <>
           {cartList.length > 0 ?
           <NavLink className="position-absolute" style={{ right: 100 }} exact to="/cart" ><AiFillShopping size="40" color="white" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {prueba}
              </span>
           </NavLink>
           :
           <div></div>

           }
       </>
    )
}

export default CartWidget
