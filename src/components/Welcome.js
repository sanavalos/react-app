import React, {useState} from "react";

export default function Welcome(props){
    const [persona, setPersona] = useState(0) //const useState = [persona, setPersona]
    const restar = () =>{
        return setPersona (persona -1)
    }

    return (
        <>
    <h1>We welcome, {persona} people</h1>
    <button onClick={() => setPersona (persona + 1)}>MAS</button>
    <button onClick={restar}>MENOS</button>
    </>
    )
}