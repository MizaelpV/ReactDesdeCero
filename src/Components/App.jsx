import React from 'react';
import "../style/styles.scss" 
import AppRoutes from './AppRoutes';


const App = () => (
<AppRoutes />
)
export default App;

//Manera de imprimir la grilla de cursos recorriendo un array y con la maquetación adecuada
/* <div className="ed-grid m-grid-3">
{
  cursos.map( c => <Curso title={c.title} image={c.image} nombre={c.nombre} apellido={c.apellido} price={c.price} imageTiny={c.imageTiny}
  />)
}
</div> */