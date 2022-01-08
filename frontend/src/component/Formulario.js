import React, {useState} from 'react'
import axios from 'axios'

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

        await axios.post('http://localhost:4000/api/usuarios/', newUsuario)

    }


    return(
        <div>
            <div>
                <label>Nombre</label>
                <input onChange={handleChange} name='nombre' placeholder='Tu Nombre' type='text'/>
                <label>Apellido</label>
                <input onChange={handleChange} name='apellido' placeholder='Tu Apellido' type='text'/>
                <label>Edad</label>
                <input onChange={handleChange} name='edad' placeholder='Tu Edad' type='number'/>
                <label>Telefono</label>
                <input onChange={handleChange} name='telefono' placeholder='Tu Telefono' type='number'/>
                <label>Correo Electronico</label>
                <input onChange={handleChange} name='correo' placeholder='Tu Correo' type='text'/>
                <button type='button' onClick={handleSubmit}>Enviar</button>
                </div>
        </div>
    )
}