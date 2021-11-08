import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const logo = "https://i.ibb.co/9TBBRmC/triangulo-play.png";
  const { wish } = useCartContext();
  //console.log(wish);
  return (
    <nav className="navbar navbar-expand navbar-dark  bg-dark">
      <div className="container-fluid ">
        <Link to="/">
          <img
            src={logo}
            width="40"
            alt="logoPlay"
            className="navbar-brand m-0 "
          />
        </Link>
        <div className="collapse navbar-collapse px-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link active">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link active">
                Tienda
              </NavLink>
            </li>
          </ul>
        </div>
        {wish.length > 0 ? (
          <NavLink className="nav-link link-light mx-2" to="/wishList">
            WishList
            <AiFillHeart className="mx-2" color="white" size="20" />
          </NavLink>
        ) : (
          ""
        )}
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
