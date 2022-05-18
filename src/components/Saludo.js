import React from "react";

class Saludo extends React.Component {
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {nombre: 'Franco'}
    }

    componentDidMount(){
        console.log('montando')
        this.setState({nombre: 'Lucas'})
        console.log('acabo de cambiar el nombre')
    }

    componentDidUpdate(){
        console.log('ACTUALIZÓ')
    }

    
    render(){
        const nombre = this.state.nombre
        return (
        <div>
        <h1>Te Saludo {nombre}
        {console.log(nombre)}</h1>
        </div>
        )
    }

}

export default Saludo;