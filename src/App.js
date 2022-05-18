import React from "react";
import Bienvenidos from "./components/Bienvenidos";
import Welcome from "./components/Welcome";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
    <Bienvenidos name='Pedro' surname='Riquelme'/>
    <Welcome/>
    <Formulario/>
    </>
  );
}
export default App;

//props {
//   name: 'Pedro',
//   surname: 'Riquelme'
// }

//class Bienvenidos{
//  constructor(){
//   this.name = 'Pedro',
//   this.surname = 'Riquelme'
//  }
// }