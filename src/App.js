import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";


 function Cabecera() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nombres">Nombres</Link>
          </li>
        </ul>
      </header>
    )
  }

function Nombres() {
  const [nombres, setNombres] = useState(["Ane", "Bea", "Lorea", "Julia", "Maider"]);
    
  const mostrarNombres = nombres.map(nombre => {
    return (
      <li>{nombre}</li>
    )
  })

 /*  El return de nombres  */
  return <ul>{ mostrarNombres}</ul>
   
}
      
      

function App() {
  return (
    
      <BrowserRouter>
       <Cabecera />
      <Route exact path="/">
         <h1>Rutas en React</h1>
       </Route>
         
      <Route exact path="/nombres">
         <Nombres />
       </Route>
    
      </BrowserRouter>
      
    )
  
}

export default App;
