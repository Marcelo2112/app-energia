import React from 'react'
import ContenedorMenu from '../componentes/ContenedorMenu'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs"
import Prueba from '../componentNav/Prueba'

import BotonMas from '../componentNav/BotonMas'

function Menu (){
    return(
        <>
            <ContenedorMenu>
                <h1>Grupo Creado 001</h1>
            </ContenedorMenu>   
            <div className='BotonMas'>
            
            <BsIcons.BsPlusCircle onClick={Prueba}/>
            </div>
            <p1 className='NuevoGroup'>Nuevo Grupo</p1>


        </>
    )
}

export default Menu 