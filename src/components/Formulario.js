import React, {useState} from "react";

export default function Formulario(){

    const users = []
    const pass = []

    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')

    const usuarios = (e) =>{
        setUsuario(e.target.value) // string que cambia
    }

    const contraseñas = (e) =>{
        setContraseña(e.target.value)
    }

    const enviarDatos = () =>{
        users.push(usuario)
        pass.push(contraseña)
        console.log('Datos guardados')
        console.log(users)
        console.log(pass)
    }

    return(
        <>
        <form onSubmit={enviarDatos}>
            <h2>INICIO de sesion</h2>
            <label for='Usuario'> Usuario </label>
            <input placeholder="user@mail.com" id='Usuario' type='email' value={usuario} onChange={usuarios}/>
            
            <label for='Contraseña'> Contraseña </label>
            <input placeholder="********" id='Contraseña' type='password' value={contraseña} onChange={contraseñas}/>
            
            <button type="submit">SUBMIT</button>
        </form>
        </>
    )
}