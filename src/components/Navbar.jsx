import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';


const Navbar = () => {
    const logo = "https://i.ibb.co/9TBBRmC/triangulo-play.png"
    return (
        <nav className="navbar navbar-expand navbar-dark  bg-dark">
            <div className="container-fluid ">
                <Link to="/"><img src={logo} width="40" alt="logoPlay" className="navbar-brand m-0 " /></Link>
                <div className="collapse navbar-collapse px-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link active" >About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link active" >Tienda</NavLink>
                        </li>
                    </ul>
                </div>
                <CartWidget />
           </div>
        </nav>
    )
}

export default Navbar
