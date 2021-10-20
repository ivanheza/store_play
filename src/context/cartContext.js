import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
	/* const cartStorage = 
  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []; */

  //console.log(cartStorage)
  const [cartList, setCartList] = useState([]);

  

  //Funcion AddToCart
	const addToCart = (detail, id) => {
		
		let cantidad = detail.cantidad;
		//console.log(cantidad);
		if (cartList.length === 0) {
			setCartList([...cartList, detail]);
		} else if (
			cartList.some((product) => detail.product.id === product.product.id)
		) {
      
			cartList.map((i, index) => {
				if (i.product.id === detail.product.id) {
					let cantProd = i.cantidad++;
					i.cantidad = cantidad + cantProd;
          /* let subTotal = i.product.precio * i.cantidad
					console.log( subTotal); */
          if (detail.product.stock === i.cantidad) {
            alert("no hay mas stock")
          }return
        
				}
			});

			
		} else setCartList([...cartList, detail]);
	};

  //Borrar Por ID
  const borrarProduct = (id)=>{
        //console.log("pruebaBorrar",id)
       const listaF = cartList.filter((i)=> i.product.id != id)
        setCartList(listaF)
        
    }
    //Borrar TODO
    const vaciarCart = () => {
        //console.log("pruebaVaciar")
        
        setCartList([])
    }  

   /*  useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(cartList))
    }, [cartList]) */

	return (
		<CartContext.Provider
			value={{
				addToCart,
        cartList,
        borrarProduct,
        vaciarCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
