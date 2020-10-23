import React from 'react';


export default function Content(props){
    const {title, children} = props;

    return(
        <section>
            <div className="tarjetaLogin">
            <header>
             <h3 className="pruebaTitulo">{title}</h3> {/*codigo javascrip*/}
            </header>
            {children}
            </div>
           
        </section>
    );

}