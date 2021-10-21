import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';


const Navbar = () => {
    const logo = "https://i.ibb.co/9TBBRmC/triangulo-play.png"
    return (
        <nav className="navbar navbar-expand navbar-dark  bg-dark">
            <div className="container-fluid ">
                <img src={logo} width="40" alt="logoPlay" className="navbar-brand m-0 " />
            
                <div className="collapse navbar-collapse px-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link active" >About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link active" >Tienda</NavLink>
                        </li>
                        <li className="nav-item ">
                            
                                
                            
                        </li>
                    </ul>
                </div>
                 <CartWidget/>   
{/*                  <NavLink className="position-absolute" style={{right:100}}  exact to="/cart" ><AiFillShopping size="30" color="white"/> </NavLink>
 */}            </div>
        </nav>
    )
}

export default Navbar
