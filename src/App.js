import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./style/styles.scss" 
import Curso from "./curso"
import Banner from "./banner"
import Formulario from "./formulario"



const App = () => (
<>
  <Banner/>
  <Formulario/>
  <Curso />
</>
)

export default App;


/*Reglas JSX 
1: Todas las etiquetas deben cerrarse 
2: Los componentes deben retornar un solo elemento padre
3: Apoyarse de los Fragments => <> Hijos </>
5: Etiqueta img siempre debe cerrarse 
6: class ="" => className
7: for => htmlFor
*/
/*Cómo subir proyecto a github
1: configurar llave ssh
2: Crear manualmente el repositorio en el github
3: Ejecutar a través de consola y hacer push hacia tu repositorio*/