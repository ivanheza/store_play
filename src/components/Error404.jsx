import React from 'react'
import { BiError } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Error404 = () => {




    return (
        <div className="container">
            <h1>Error 404<BiError color="red" /></h1>

            <p>La página que buscas no existe o fue movida de lugar</p>
            <Link to="/" className="w-25 p-1 m-0 btn btn-secondary btn-lg">Volver</Link>


        </div>
    )
}

export default Error404
