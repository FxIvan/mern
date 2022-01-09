import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () =>{
    return(
        <div className='container-fluid  navbar-desktop'>
            <div className='row col-12 text-center'>
                <div className='col-6'>
                    <Link to='/listausuario' className='Link'><span>Lista de usuarios</span></Link>
                </div>
                <div className='col-6'>
                    <Link to='/' className='Link'><span>Crear Usuario</span></Link>
                </div>
            </div>
        </div>
    )
}