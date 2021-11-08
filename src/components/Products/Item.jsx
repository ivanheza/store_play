import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const Item = ({ producto }) => {
  const { nombre, precio, image, categoria, id } = producto;
  ////
  const { wishList, inWishList } = useCartContext();

  const handleLike = () => {
    //console.log("pruebaFAv");
    wishList({
      producto: producto,
      liked: true,
    });
  };

  return (
    <div className="col">
      <div className="card h-100 rounded-3 shadow-sm">
        <Link to={`/detalle/${id}`}>
          <img src={image} class="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <div className="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-warning">
              {categoria}
            </span>
            <span
              className="float-end badge rounded-pill bg-primary"
              style={{ fontSize: "1rem" }}
            >
              $ {precio}
            </span>

            <span className="m-3">
              {!inWishList(id) ? (
                <AiOutlineHeart
                  cursor="pointer"
                  size="25"
                  onClick={handleLike}
                />
              ) : (
                <p className="m-0 p-0">
                  En WishList
                  <AiFillHeart
                    size="25"
                    cursor="pointer"
                    onClick={handleLike}
                  />
                </p>
              )}
            </span>
          </div>
          <h4 className="card-title pricing-card-title">{nombre}</h4>
        </div>
        <div className="text-center my-3">
          <Link
            to={`/detalle/${id}`}
            className=" btn w-75 btn-outline-primary "
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
