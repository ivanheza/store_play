import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItems = ({ producto }) => {

  const { nombre, precio, image, categoria, id } = producto
  return (
    <>
      <div className="col-md-5 m-3">
        <div className="card p-3 mb-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img className="rounded card-img-categoria" src={image} alt={nombre} />
              <div className="ms-2 c-details">
                <h3 className=" badge bg-primary mb-0" style={{ fontSize: "1.2rem" }}>$ {precio}</h3>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="badge bg-warning my-1">{categoria}</div>
            <h4 className="heading">{nombre}</h4>
            <div className="mt-5 text-end">
              <Link to={`/detalle/${id}`} className=" btn w-50 btn-outline-primary ">Ver Detalle</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryItems
