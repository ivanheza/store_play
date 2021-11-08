import React from 'react'
import { Link} from 'react-router-dom'

const NavCat = () => {
  
    return (
        
        <div className="">
            <nav className="nav nav-pills bg-secondary flex-row justify-content-center">
                <Link to="/" className="nav-link link-info">Todo</Link>
                <Link to="/categoria/audio&dj" className="nav-link link-info">Audio&DJ</Link>
                <Link to="/categoria/iluminacion" className="nav-link link-info">Iluminación</Link>
                <Link to="/categoria/display&fx" className="nav-link link-info">Display&FX</Link>
            </nav>
        </div>
    )
}

export default NavCat
