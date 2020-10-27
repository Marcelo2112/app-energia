import React from 'react';
import InputLine from '../componentes/InputLine'
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {isEmpty} from '../utilidad/Util'

import TextArea from '../componentes/TextArea'





class LoginForm extends React.Component{
    state={
        logindata:{
            id:'',
            password:''
        },
        errors: {
            id: false,
            password:false
        }
    }

    onChange =(name, event) => {
        const value = event.target.value;
        const logindata= Object.assign({},this.state.logindata);
        logindata[name]= value;
        this.setState({
                logindata
        });
        
    
    }

    validate = () => {
        const idError =isEmpty(this.state.id);
        const passwordError=isEmpty(this.state.password);

        this.setState({
            errors:{
                id:idError,
                password:passwordError,
            }
              });

        if (this.state.errors.id == false && this.state.errors.password == false)
        {
            this.doLogin()
            
        }
    }






    render(){
        const {id, password} = this.state.logindata;
        const{errors} = this.state;







        return (
            
            <form>
                <div className="estiloIcon">
                 <FontAwesomeIcon icon={faUser}/>
                </div>
                <InputLine
                name="id"
                placeholder="Usuario / Email"
                type="text"
                onChange={this.onChange} 
                error={errors.id} 
                value={id} 
                />
                
                <InputLine
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.onChange} 
                error={errors.password} 
                value={password} 
                />
               
                
                
                <div>
                
                    <button className="botonIngresar" > Iniciar Sesion</button>
                </div>
                <div>
                    <button className="botonCrear">Crear Cuenta</button>
                </div>
            </form>
            
            
        )

    }



}

export default withRouter (LoginForm)