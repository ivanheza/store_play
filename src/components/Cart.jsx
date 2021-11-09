import React, { useState } from "react";
import { useCartContext } from "../context/cartContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getFirestore } from "../services/getFireBase";
import firebase from "firebase/app";
import "firebase/firestore";
import ModalBase from "./Stateless/ModalBase";
import CheckOut from "./Checkout/CheckOut";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartList, borrarProduct, vaciarCart, cuentaOrden, cliente } =
    useCartContext();

  const [modal, SetModal] = useState(false);
  const [btn, showBtn] = useState(true);
  const [orden, setOrden] = useState(null);

  //console.log(orden)

  const ordenCompra = (e) => {
    e.preventDefault();
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.cliente = {
      name: cliente.nombre,
      phone: cliente.telefono,
      email: cliente.correo,
    };
    order.total = cuentaOrden();
    order.productos = cartList.map((p) => {
      const id = p.id;
      const producto = p.nombre;
      const cantidad = p.cantidad;
      const precio = p.precio * p.cantidad;
      return { id, producto, precio, cantidad };
    });

    const dbQuery = getFirestore();
    //genero constante de orden y creamos una nueva coleccion en fire
    const orderQuery = dbQuery.collection("orders");
    orderQuery
      .add(order)
      .then((res) => setOrden({ idOrden: res.id }))
      .catch((err) => console.log("Ooops hubo un error", err))
      .finally(() => {
        vaciarCart();
        showBtn(true);
        new Swal({
          title: "Gracias Por Tu Compra",
          text: "¡Vuelve Pronto!",
          icon: "Success",
          timer: "1500",
          showConfirmButton: false,
        });
      });

    /////// Actualizar Items de Firebase

    const updateProducts = dbQuery.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((p) => p.id)
    );
    const batch = dbQuery.batch();

    updateProducts.get().then((coll) => {
      coll.docs.forEach((docSnap) => {
        batch.update(docSnap.ref, {
          stock:
            docSnap.data().stock -
            cartList.find((p) => p.id === docSnap.id).cantidad,
        });
      });
      batch.commit().then((res) => {
        //console.log("resultCommit",res)
      });
    });
  };
  ///////Boton
  const comprar = () => {
    //console.log("prueba enboton modal")
    showBtn(false);
    SetModal(true);
  };
  return (
    <div className="container w-75 my-3 shadow-lg ">
      {orden ? (
        <CheckOut key={orden.idOrden} idOrder={orden.idOrden} />
      ) : cartList.length === 0 ? (
        <li className="list-group-product d-flex justify-content-between">
          <h4 className="fw-light">Tu Carrito está vacío</h4>
        </li>
      ) : (
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8 my-3">
            <h1>Carrito</h1>
            <ul className="list-group mb-3">
              {cartList.map((p, index) => {
                return (
                  <li
                    key={p.id}
                    className="list-group-product d-flex justify-content-between  shadow-sm m-2"
                    style={{ fontSize: 12 }}
                  >
                    <div className="row align-items-center ">
                      <p className="col-1 my-0 ">#{index + 1}</p>
                      <img
                        src={p.imagen}
                        className="col-2 img-fluid p-0"
                        width="40"
                        alt=""
                      />
                      <p className="col-3 my-0">{p.nombre}</p>
                      <small className="col-2 text-center">$ {p.precio}</small>
                      <small className="col-1 text-center">
                        Cant:{p.cantidad}
                      </small>
                      <span className=" col-2 text-end ">
                        $ {p.precio * p.cantidad}
                      </span>
                      <span className=" col-1 d-flex justify-content-center">
                        <button
                          onClick={() => borrarProduct(p.id)}
                          className="btn btn-danger btn-sm "
                        >
                          X
                        </button>
                      </span>
                    </div>
                  </li>
                );
              })}
              <li className="list-group-product d-flex justify-content-end ">
                <h5 className="">Total: $ {cuentaOrden()}</h5>
              </li>
              <li className="list-group-product d-flex justify-content-end align-items-center ">
                <Link to="/" className="p-1 m-0 btn btn-secondary btn-sm">
                  Seguir Comprando
                </Link>
                <button
                  onClick={() => vaciarCart()}
                  className="btn btn-danger p-1 m-2 "
                >
                  <AiFillDelete
                    style={{
                      margin: 0,
                      padding: 0,
                      fontSize: 30,
                    }}
                  />
                </button>
                {btn ? (
                  ""
                ) : (
                  <button onClick={ordenCompra} className="btn btn-primary">
                    Generar Orden
                  </button>
                )}
                {btn ? (
                  <button className="btn btn-primary" onClick={comprar}>
                    Continuar Compra
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
          {modal === true ? <ModalBase hide={SetModal} /> : ""}
        </div>
      )}
    </div>
  );
};

export default Cart;
