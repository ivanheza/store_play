import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const cartStorage =
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

  //console.log(cartStorage)

  const [cartList, setCartList] = useState(cartStorage);


  //Funcion AddToCart
  const addToCart = (detail, id) => {
    /////// Se define la variable tomando la cantidad del counter
    let cantidad = detail.cantidad;
    /////// Buscamos si el producto ya está en carrito y le sumamos la cantidad
    if (cartList.some((product) => detail.product.id === product.product.id)) {
      let qtyCart = cartList.map((item,) => item.product.id === detail.product.id ? item.cantidad += cantidad : item.cantidad)
      setCartList([...cartList])
    } else setCartList([...cartList, detail]);
  };

  //Borrar Por ID
  const borrarProduct = (id) => {
    //console.log("pruebaBorrar",id)
    const listaF = cartList.filter((i) => i.product.id != id)
    setCartList(listaF)

  }
  //Borrar TODO
  const vaciarCart = () => {
    //console.log("pruebaVaciar")

    setCartList([])
  }

  //LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList))
  }, [cartList])


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
