import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItems = ({ producto }) => {

  const { nombre, precio, image, categoria,id } = producto
  return (
    <>
      {/* <div className="card p-3 mb-2 rounded-3">
        <img src={image} class="card-img-top" alt="..." />
        <div className="card-body">
          <div className="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-transparent">{categoria}</span>
            <span className="float-end badge rounded-pill bg-primary" style={{fontSize:"1rem"}}>$ {precio}</span>
          </div>
          <h4 className="card-title pricing-card-title">{nombre}</h4>
        </div>
          <div className="text-center my-3">
            <Link to={`/detalle/${id}`} className=" btn w-75 btn-outline-primary ">Ver Detalle</Link>
          </div>
      </div> */}
     
        <div className="col-md-6">
          <div className="card p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div> <img className="rounded " src={image} alt={nombre} /> </div>
                            <div className="ms-2 c-details">
                                <h3 className=" badge bg-primary mb-0" style={{fontSize:"1rem"}}>$ {precio}</h3>
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
