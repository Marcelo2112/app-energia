import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr"


export const SidebarData = [
    {
        title: 'Inicio',
        path: '/menu',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Reportes',
        path: '/reportes',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: 'Configuracion',
        path: '/configuracion',
        icon: <AiIcons.AiFillTool/>,
        cName:'nav-text'
    },
    {
        title: 'Soporte',
        path: '/soporte',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    {
        title: 'Cerrar Sesion',
        path: '/login',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    }

]