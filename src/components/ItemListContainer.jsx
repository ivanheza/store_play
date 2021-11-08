import React, { useEffect, useState } from "react";
import { getFirestore } from "../services/getFireBase";
import Item from "./Products/Item";
import Loader from "./Stateless/Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  //console.log(productos)
  const [loader, setLoader] = useState(true);

  const getProducts = async () => {
    try {
      //Firestore
      const db = getFirestore();
      const res = await db.collection("items").get();
      //traemos toda la coleccion
      setProductos(res.docs.map((it) => ({ id: it.id, ...it.data() })));

      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  //console.log(categoria)
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="container mt-4 mb-3">
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            {productos.map((producto) => (
              <Item key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
