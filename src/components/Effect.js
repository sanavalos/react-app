import React, { useEffect, useState } from "react";

export default function Effect(){

    const [color, setColor] = useState('green')
    const [round, setRound] = useState('0px')
    const [click, setClick] = useState('Enviar')
    const [enviado, setEnviado] = useState(false)


    useEffect(() => {
        function mouseMove(e){
            if(e.clientY < window.innerHeight/2){
                setColor('green')
                setRound('0px')
                setClick('Enviar')
            } else {
                setColor('red') 
                setRound('20px')
                setClick('Clickeame!')
            }
        }
        window.addEventListener('mousemove', mouseMove)
        console.log('Did Update...')
        
        return() => {
            window.removeEventListener('mousemove', mouseMove)
        }
    })

    useEffect(() => {
        console.log('Did Mount')
    }, [])

    useEffect(() => {
        console.log('Cambio de color')
    }, [color])

    const cliqueado = function(){
        if(enviado === false){
            setEnviado(true)
        } else {setEnviado(false)}
    }

    return(
        <div>
            <button style={{background: color, borderRadius: round}} onClick={cliqueado}>{click}</button>
            {enviado && <h3>Boton cliqueado!</h3>}
        </div>
    )

}