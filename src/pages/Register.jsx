import React from 'react'
import Contenedor from '../componentes/Contenedor'
import RegisterForm from '../contenedor/RegisterForm'


function Register (){
    return(
        <>
        <Contenedor title="Crear Cuenta">
            <RegisterForm/>
        </Contenedor>
        </>
    )
}

export default Register;