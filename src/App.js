import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./style/styles.scss"
import Curso from "./curso"

const App = () => (
<>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://image.freepik.com/free-vector/cutout-background_23-2148004241.jpg" alt="sjksc"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="www.google.com" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">
  <Curso />
  <Curso /> 
  <Curso />
  <Curso />
  <Curso />
</div>
</>
)

export default App;
/*Reglas JSX 
1: Todas as etiquetas deben cerrarse 
2: Los componentes deben retornar un solo elemento padre
3: Apoyarse de los Fragments => <> Hijos </>
5: Etiqueta img siempre debe cerrarse 
6: class ="" => className
7: for => htmlFor
*/
/*Cómo subir proyecto a github



*/ 
