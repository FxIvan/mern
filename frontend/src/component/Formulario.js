import React, {useState} from 'react'
import axios from 'axios'
import './formularioPrincipal.css'

export const Formulario = () =>{

    const [form,setForm] = useState({
        nombre:'',
        apellido:'',
        edad:'',
        telefono:'',
        correo:''
    })

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newUsuario = {
            nombre:form.nombre,
            apellido:form.apellido,
            edad:form.edad,
            telefono:form.telefono,
            correo:form.correo
        }
        await axios.post('http://localhost:27017/usuarios', newUsuario)
        window.location.href = '/'
        
    }
    return(
        <div className='formulario-principal'>
        <div className='container mt-5 m-auto col-12 d-flex justify-content-center'>
            <div className='row col-5 text-center'>
                <div className='col-12'>
                    <label for="formControlInput" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formControlInput" placeholder="Tu Nombre"  onChange={handleChange} name='nombre'/>
                </div>
                <div className='col-12 mt-2'>
                    <label for="formControlInput" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="formControlInput" placeholder="Apellido"  onChange={handleChange} name='apellido'/>
                </div>
                <div className='col-12 mt-2'>
                    <label for="formControlInput" class="form-label">Edad</label>
                    <input type="number" class="form-control" id="formControlInput" placeholder="Tu Edad"  onChange={handleChange} name='edad'/>
                </div>
                <div className='col-12 mt-2'>
                    <label for="formControlInput" class="form-label">Telefono</label>
                    <input type="number" class="form-control" id="formControlInput" placeholder="Tu Telefono"  onChange={handleChange} name='telefono'/>
                </div>
                <div className='col-12 mt-2'>
                <label for="formControlInput" class="form-label">Correo Electronico</label>
                <input type="email" class="form-control" id="formControlInput" placeholder="Tu Correo Electronico"  onChange={handleChange} name='correo'/>
                </div>
                <button type='button' onClick={handleSubmit} className='btn btn-dark mt-4 col-4  m-auto'>Enviar</button>
            </div>
        </div>
        </div>
    )
}