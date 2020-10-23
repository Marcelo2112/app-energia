import React from 'react'
import InputLine from '../componentes/InputLine'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'


export default class RegisterForm extends React.Component{
    state={
        registerDate:{
            nombre:'',
            apellido:'',
            id:'',
            password:'',
            passConfirmation:''

        },
        errors:{
            nombre: false,
            apellido: false,
            id: false,
            password: false,
            passConfirmation: false

        }
    }
















    render (){
        const{
            nombre,
            apellido,
            id,
            password,
            passConfirmation
        } = this.state.registerDate;

        const {errors} = this.state;

        return(
            <form>
                <div className="estiloIcon">
                 <FontAwesomeIcon icon={faUsers}/>
                </div>
                <InputLine
                name="nombre"
                placeholder="Nombre"
                required={true}
                type="text"
                />
                <InputLine
                name="apellido"
                placeholder="Apellido"
                required={true}
                type="text"
                />
                <InputLine
                name="id"
                placeholder="Id"
                required={true}
                type="text"
                />
                <InputLine
                name="password"
                placeholder="Password"
                required={true}
                type="password"
                />
                <InputLine
                name="passConfirmation"
                placeholder="Confirmar Clave"
                required={true}
                type="password"
                />
                <div>
                    <button className="botonForm"> Crear Cuenta </button>
                </div>

            </form>
        )



    }
}