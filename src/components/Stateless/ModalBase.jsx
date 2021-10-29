import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useCartContext } from '../../context/cartContext'

const ModalBase = ({hide}) => {
    
    const { NuevoCliente } = useCartContext()
    const [nombre,SetNombre] = useState("")
//console.log(nombre)
    const [tel,setTel] = useState("")
    const [correo,setCorreo] = useState("")
    const onChange = (e)=>{
        e.preventDefault()
        if (e.target.name === "nombre") {
            SetNombre(e.target.value)
        }else if (e.target.name === "telefono") {
            setTel(e.target.value)
        }else if (e.target.name === "correo") {
            setCorreo(e.target.value)
        }
        
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if (nombre === "" || tel === "" || correo === "") {
            alert("Introduce Datos Correctos")
        }else{
            alert("dataCorrect")
            NuevoCliente({
            nombre:nombre,
            telefono:tel,
            correo:correo
        })
            hide(false)
        }
    }
    //console.log(cartList)

    let modalStyle ={
        display : "block",
        backgroundColor:"rgba(0,0,0,0.8)"
    }
    return (
        <div class="modal show fade" style={modalStyle}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ingresa Tus Datos</h5>
                        {/* <button class="btn-close" onClick={hide}></button> */}
                    </div>
                    <div class="modal-body">
                        <form action="" onSubmit={onSubmit}>
                            <div class="mb-3">
                                <label>Nombre:</label>
                                <input type={"text"} name="nombre" id="nombre" value={nombre} class="form-control" onChange={onChange} />
                            </div>
                            <div class="mb-3">
                                <label>Teléfono:</label>
                                <input type={"number"} name="telefono" id="telefono" value={tel} class="form-control" onChange={onChange} />
                            </div>
                            <div class="mb-3">
                                <label>Email:</label>
                                <input type={"text"} name="correo" id="correo" value={correo} class="form-control" onChange={onChange} />
                            </div>
                            
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Continua con tu compra</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ModalBase
