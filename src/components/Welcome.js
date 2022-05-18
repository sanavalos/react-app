import React, {useState} from "react";

export default function Welcome(props){
    const [persona, setPersona] = useState(0) //const useState = [persona, setPersona]
    const [nombre, setNombre] = useState('Santi')
    
    const restar = () =>{
        return setPersona (persona -1)
    }

    const cambiarNombre = () => {
        if (nombre==='Santi'){
            setNombre('Roman')
        } else{
            setNombre('Santi')
        }
    }
    
    return (
        <>
    <h1>We welcome, {persona} people</h1>
    <button onClick={() => setPersona (persona + 1)}>MAS</button>
    <button onClick={restar}>MENOS</button>
    <h1>Hola {nombre}</h1>
    <button onClick={cambiarNombre}>Cambiar nombre</button>
    </>
    )
}