import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const Actualizar = () =>{

    const [user,setUser] = useState([])
    const [nuevoDato, setNuevoDato] = useState({
        nombre:'',
        apellido:'',
        edad:'',
        telefono:'',
        correo:''
    })

    const {id} = useParams()

    useEffect(()=>{
        const getUser = async() =>{
            const usuarioTraido = await axios.get(`http://localhost:27017/usuarios/${id}`)
            setUser(usuarioTraido.data)
        }
        getUser()
    },[id])

    console.log(user)

    const handleChange = (e) =>{
        setNuevoDato({
            ...nuevoDato,
            [e.target.name]:e.target.value
        })
    }

    const handleActualizar = async() =>{
        await axios.put(`http://localhost:27017/usuarios/${id}`,nuevoDato)
        window.location.href = '/listausuario'
    }

    return(
        <div className='formulario-principal'>
        <div className='container mt-5 m-auto col-12 d-flex justify-content-center'>
            <div className='row col-5 text-center' key={user.id}>
                <div className='col-12'>
                    <label for="formControlInput" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formControlInput" placeholder="Tu Nombre"  onChange={handleChange} name='nombre' placeholder={user.nombre}/>
                </div>
                <div className='col-12 mt-2'>
                    <label for="formControlInput" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="formControlInput" placeholder="Apellido"  onChange={handleChange} name='apellido' placeholder={user.apellido}/>
                </div>
                <div className='col-12 mt-2'>
                    <label for="formControlInput" class="form-label">Edad</label>
                    <input type="number" class="form-control" id="formControlInput" placeholder="Tu Edad"  onChange={handleChange} name='edad' placeholder={user.edad}/>
                </div>
                <div className='col-12 mt-2'>
                    <label for="formControlInput" class="form-label">Telefono</label>
                    <input type="number" class="form-control" id="formControlInput" placeholder="Tu Telefono"  onChange={handleChange} name='telefono' placeholder={user.telefono}/>
                </div>
                <div className='col-12 mt-2'>
                <label for="formControlInput" class="form-label">Correo Electronico</label>
                <input type="email" class="form-control" id="formControlInput" placeholder="Tu Correo Electronico"  onChange={handleChange} name='correo' placeholder={user.correo}/>
                </div>
                <button type='button' onClick={handleActualizar} className='btn btn-dark mt-4 col-4  m-auto btn-actualizar'>Actualizar</button>
                <Link to='/listausuario' className='btn btn-dark col-4 m-auto mt-4 btn-volver'>Volver</Link>
            </div>
        </div>
        </div>
    )
}