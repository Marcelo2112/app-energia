import React from 'react'
import InputLine from '../componentes/InputLine'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {isEmpty} from '../utilidad/Util'


export default class RegisterForm extends React.Component{
    state={
        registerData:{
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
    };

    onChange =(name, event) => {
        const value = event.target.value;
        const registerData= Object.assign({},this.state.registerData);
        registerData[name]= value;
        this.setState({
                registerData
        });
        
    
    }
    doRegister = (event) => {
        const {
            nombre,
            apellido,
            id,
            password,
            passConfirmation
            
        } = this.state.registerData;

        

        const nombreError =isEmpty(nombre);
        const apellidoError=isEmpty(apellido);
        const idError=isEmpty(id);
        const passwordError=isEmpty(password);
        const passConfirmationError =isEmpty(passConfirmation);

        
        this.setState({
            errors:{
                nombre:nombreError,
                apellido:apellidoError,
                id:idError,
                password:passwordError,
                passConfirmation: passConfirmationError,
                

             }
              });

        event.preventDefault();
    }
        

    


    render (){
        const{
            nombre,
            apellido,
            id,
            password,
            passConfirmation
        } = this.state.registerData;

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
                onChange={this.onChange}
                error={errors.nombre}
                value={nombre}
                />
                <InputLine
                name="apellido"
                placeholder="Apellido"
                required={true}
                type="text"
                onChange={this.onChange}
                error={errors.apellido}
                value={apellido}
                />
                <InputLine
                name="id"
                placeholder="Id"
                required={true}
                type="text"
                onChange={this.onChange}
                error={errors.id}
                value={id}
                />
                <InputLine
                name="password"
                placeholder="Password"
                required={true}
                type="password"
                onChange={this.onChange}
                error={errors.password}
                value={password}
                />
                <InputLine
                name="passConfirmation"
                placeholder="Confirmar Clave"
                required={true}
                type="password"
                onChange={this.onChange}
                error={errors.passConfirmation}
                value={passConfirmation}
                />
                <div>
                    <button className="botonForm"> Crear Cuenta </button>
                </div>

            </form>
        )



    }
}