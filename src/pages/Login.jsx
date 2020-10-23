import React from 'react'
import Contenedor from '../componentes/Contenedor'
import LoginForm from '../contenedor/LoginForm'


const Inicio = [
    {href: 'register', title: 'Crear Cuenta'}
];








function Login(props){
    return (
        <>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
        <Contenedor className="title3" title="BIENVENIDO">
            <LoginForm Inicio={Inicio}/>
        </Contenedor>
        </>
    )
}

export default Login;