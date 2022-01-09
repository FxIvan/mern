import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const ListaUsuario = () => {
  const [lista, setLista] = useState([])

  useEffect(() => {
    const getUsuario = async () => {
      const res = await axios.get('http://localhost:27017/usuarios')
      setLista(res.data)
    }
    getUsuario()
  }, [lista])

  const handleEliminar = async(id) =>{
      await axios.delete('http://localhost:27017/usuarios/' + id)
  }

  return (
    <div className='container row m-auto mt-5'>
      {lista.map((list) => (
        <div className="card" key={list._id} className='col-md-4 mb-4'>
          <div className="card-header text-center"><h2>DATOS</h2></div>
          <div className="card-body">
            <h5 className="card-title">Nombre: {list.nombre}</h5>
            <h5 className="card-title">Apellido: {list.apellido}</h5>
            <h5 className="card-title">Edad: {list.edad}</h5>
            <h5 className="card-title">Telefono: {list.telefono}</h5>
            <h5 className="card-title">Correo: {list.correo}</h5>
            <div className='text-center d-flex justify-content-around mt-4'>
            <button className='btn btn-danger' onClick={()=> handleEliminar(list._id)}>Eliminar</button>
            <Link to={`/editar/${list._id}`} className='btn btn-success'>Actulizar</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
