import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
	const cartStorage = 
  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
	const cartTotal = 
  parseInt(localStorage.getItem("cartTotal")) ? parseInt(localStorage.getItem("cartTotal")) : 0;
  //console.log(cartStorage)

  const [cartList, setCartList] = useState(cartStorage);
	const [qty,setQty] = useState(0)
	const [total,setTotal] = useState(cartTotal)
  // console.log("Cantidad",qty)
  // console.log("total",total)
  // console.log("CartList",cartList)

  //Funcion AddToCart
	const addToCart = (detail, id) => {
		
		let cantidad = detail.cantidad;
		//console.log(cantidad);
		if (cartList.length === 0) {
			setCartList([...cartList, detail]);
			setQty(1)
			const total =  cartList.reduce((sum,value)=> (typeof value.cantidad == "number" ? sum+value.cantidad : sum),1)
			setTotal(total)

		} else if (cartList.some((product) => detail.product.id === product.product.id)) {
      
			const qtyCart = cartList.map((item,)=>{
				return item.product.id === detail.product.id ? item.cantidad += cantidad : item.cantidad
			})
			setQty(qtyCart)
			const total =  cartList.reduce((sum,value)=> (typeof value.cantidad == "number" ? sum+value.cantidad : sum),0)
			setTotal(total)
			setCartList([...cartList])
		} else {
			const total =  cartList.reduce((sum,value)=> (typeof value.cantidad == "number" ? sum+value.cantidad : sum),1)
			setTotal(total)
			setCartList([...cartList, detail])};
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
				setTotal(0)
    }  

		//LOCAL STORAGE
    useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(cartList))
    }, [cartList])
    useEffect(() => {
			localStorage.setItem("cartTotal", total)
    }, [total])

	return (
		<CartContext.Provider
			value={{
				addToCart,
        cartList,
        borrarProduct,
        vaciarCart,
				total,
				qty
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
