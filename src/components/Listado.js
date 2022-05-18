import React from "react";

const personas = [
    {
        nombre: 'Pepe',
        id: 1
    },
    {
        nombre: 'Juan',
        id: 2
    },
    {
        nombre: 'Jaime',
        id: 3
    }
]

export default function Listado() {

    const mapeoPersonas = () => {return personas.map((value) => {
                                    return(
                                    <div>
                                        <h2>{value.nombre}</h2>
                                        <h4>{value.id}</h4>    
                                    </div>)   
                                    });
                                }

    return(
        <div>           
            {mapeoPersonas()}
        </div>
    )
}

