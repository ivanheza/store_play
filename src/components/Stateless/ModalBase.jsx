import React, {useState} from "react"
import {useCartContext} from "../../context/cartContext"
import Swal from "sweetalert2"

const ModalBase = ({hide}) => {
   const {NuevoCliente} = useCartContext()
   const [nombre, SetNombre] = useState("")
   //console.log(nombre)
   const [tel, setTel] = useState("")
   const [correo, setCorreo] = useState("")
   const [correoVal, setCorreoVal] = useState("")

   const onChange = (e) => {
      e.preventDefault()
      if (e.target.name === "nombre") {
         SetNombre(e.target.value)
      } else if (e.target.name === "telefono") {
         setTel(e.target.value)
      } else if (e.target.name === "correo") {
         setCorreo(e.target.value)
      } else if (e.target.name === "correoVal") {
         setCorreoVal(e.target.value)
      }
   }

   const onSubmit = (e) => {
      e.preventDefault()
      if (nombre === "" || tel === "" || correo === "") {
         new Swal({
            title: "No puedes dejar un campo vacío",
            icon: "warning",
            timer: "1200",
            showConfirmButton: false,
         })
      } else if (correoVal !== correo) {
         new Swal({
            title: "El email no coincide",
            icon: "error",
            timer: "1200",
            showConfirmButton: false,
         })
      } else {
         new Swal({
            title: "Datos Correctos",
            text: "A continuacion selecciona la opción: Generar Orden.",
            icon: "success",
         })
         NuevoCliente({
            nombre: nombre,
            telefono: tel,
            correo: correo,
         })
         hide(false)
      }
   }
   //console.log(cartList)

   let modalStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
   }
   return (
      <div className="modal show fade" style={modalStyle}>
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                     Ingresa Tus Datos
                  </h5>
                  <button className="btn-close" onClick={hide}></button>
               </div>
               <div className="modal-body">
                  <form action="" onSubmit={onSubmit}>
                     <div className="mb-3">
                        <label>Nombre:</label>
                        <input
                           type={"text"}
                           name="nombre"
                           id="nombre"
                           value={nombre}
                           className="form-control"
                           onChange={onChange}
                        />
                     </div>
                     <div className="mb-3">
                        <label>Teléfono:</label>
                        <input
                           type={"tel"}
                           placeholder="55-1234-5678"
                           pattern="[0-9]{2}[0-9]{4}[0-9]{4}"
                           name="telefono"
                           id="telefono"
                           value={tel}
                           className="form-control"
                           onChange={onChange}
                        />
                     </div>
                     <div className="mb-3">
                        <label>Email:</label>
                        <input
                           type={"text"}
                           name="correo"
                           id="correo"
                           value={correo}
                           className="form-control"
                           onChange={onChange}
                        />
                     </div>
                     <div className="mb-3">
                        <label>Email:</label>
                        <input
                           type={"text"}
                           placeholder="Introduce de nuevo tu correo"
                           name="correoVal"
                           id="correoVal"
                           value={correoVal}
                           className="form-control"
                           onChange={onChange}
                        />
                     </div>

                     <div className="modal-footer">
                        <button type="submit" className="btn btn-success">
                           Continua con tu compra
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ModalBase
