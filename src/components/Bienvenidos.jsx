import React from "react";

export default function Bienvenidos(props){ //props es un objeto
    function nombreApellido(){ //metodo de Bienvenidos
        return `${props.name} ${props.surname}`; //es JS puro, no JSX
    }
    return(
        <h1>Bienvenido, {nombreApellido()}</h1> //invocacion 
    )
}