import React from "react";
// Componente de clase

export default class PrimerComponente extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola, mundo!</h1>
            </div>
        );
    }
}

//Componente de funciones 
export function SegundoComponente({nombre,apellido}) {
    return <h1>El nombres es {nombre} y {apellido}</h1>
    
}

//Componente funcion Flecha
export let TercerComponente = ()=><>TercerComponente</>;

 
