import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const cartStorage =
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

  //console.log(cartStorage)

  const [cartList, setCartList] = useState(cartStorage);
 // console.log(cartList)

 ///////////CLiente
  const clienteStorage =
  localStorage.getItem("cliente") ? JSON.parse(localStorage.getItem("cliente")) : {}
 
  const [cliente , SetCliente] = useState(clienteStorage)


  //Funcion AddToCart
  const addToCart = ({ id,
    nombre,
    imagen,
    precio,
    descripcion,
    cantidad, categoria,stock }) => {
    if (inCart(id)) {
      /////// Se define la variable del producto en carrito copiando el state
      
      const productsCart = [...cartList]
      const product = cartList.find((i) => i.id === id);
      product.cantidad += cantidad
      
      //console.log(product.cantidad)
      //console.log(stock)
      setCartList(productsCart)
    } else {
      setCartList([...cartList,
      { id, nombre, imagen, categoria, precio, descripcion, cantidad, stock }])
      //console.log(stock)
    }
  };

  //INCART
  const inCart = (id) => {
    return cartList.some((product) => product.id === id)
  }
  //Cantidad de Producto
  const cantProd = (id) => {

    let prod = cartList.find((i) => i.id === id)

    return prod.cantidad
  }

  //Total Productos Carrito
  const cartTotal = () => {
    let qty = cartList.reduce((acc, item) => {
      return acc + item.cantidad
    }, 0)
    return qty

  }
  //Suma precios del carrito

   const cuentaOrden = () => {
        let cuentaTotal = cartList.reduce((acc, product) => {
            let sub = product.cantidad * product.precio
            return acc += sub
        }, 0)
        //console.log(cuentaTotal)
        return cuentaTotal
    }

  //Borrar Por ID
  const borrarProduct = (id) => {
    //console.log("pruebaBorrar",id)
    const listaF = cartList.filter((i) => i.id !== id)
    setCartList(listaF)

  }
  //Borrar TODO
  const vaciarCart = () => {
    //console.log("pruebaVaciar")

    setCartList([])
  }

  //NuevoCLiente
  const NuevoCliente =  (cliente)=>{
   //console.log(cliente)
   SetCliente(cliente)
  }

  //LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList))
    localStorage.setItem("cliente", JSON.stringify(cliente))
  }, [cartList,cliente])


  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartList,
        borrarProduct,
        vaciarCart,
        inCart,
        cantProd,
        cartTotal,
        cuentaOrden,
        NuevoCliente,
        cliente
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
