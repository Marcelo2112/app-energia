import React from 'react'
import SelectLine from '../componentes/SelectLine'
import InputLine from '../componentes/InputLine'
import TextArea from '../componentes/TextArea'


const Prueba = [
    {value: '', label: 'Seleccione...'},
    {value: 'consulta', label: 'Consulta'},
    {value: 'Reclamo', label: 'Reclamo'},
    {value: 'problema_App', label: 'Problema App'},
    {value: 'sugerencia', label: 'Sugerencia'},



];

const motivos = {
    id:'Motivos',
    options:['Reclamo', 'Consulta','Problema App', 'Sugerencia']
};


 export default class SoporteForm extends React.Component{
    state ={
        soporteData:{
            email:'',
            asunto:'',
            motivo:''

            
        }, 
        errors:{
            email:false,
            asunto:false,
            motivo:false


        }
    };

    

    onChange =(name, event) => {
        const value = event.target.value;
        const soporteData= Object.assign({},this.state.soporteData);
        soporteData[name]= value;
        this.setState({
                soporteData
        });
        
    
    }
   

    render (){
        const {
            asunto,
            email,
            motivo


        } =this.state.soporteData;

        const {errors} = this.state;
      
        return (

            <form>
                <InputLine
                name="email"
                label="Email"
                value={email}
                list={motivos}
                onChange={this.onChange}
                required={true}     
                />

                <SelectLine
                name="aaa"
                label="aaa"
                value={asunto}
                options={Prueba}
                onChange={this.onChange}
                error={errors.browser}
                required={true}    
                
                />
                

            


                <TextArea
                name="Descrption"
                label="Descripci&oacute;n" 
                
                />
            </form>
        )
    }
}   

