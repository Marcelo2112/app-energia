import React from 'react';


export default function ContenedorMenu(props){
    const {title, children} = props;

    return(
        <section>
            <div className="tarjetaMenu">
            {children}
            </div>
           
        </section>
    );

}