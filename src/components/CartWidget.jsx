import React, { useEffect, useState } from 'react'
import { AiFillShopping } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const CartWidget = () => {
    
    const {cartList} = useCartContext()
    const [cartTotal,setCartTotal] = useState(0)
    const total = ()=>{
          let qty = cartList.reduce((acc,item)=>{
            return acc + item.cantidad
          },0)
        setCartTotal(qty)
        }


     
  
    useEffect(() => {
      total()
    }, [cartList])

    return (
       <>
           {cartList.length > 0 ?
           <NavLink className="position-absolute" style={{ right: 100 }} exact to="/cart" ><AiFillShopping size="40" color="white" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {cartTotal}
              </span>
           </NavLink>
           :
           <div>X</div>

           }
       </>
    )
}

export default CartWidget
