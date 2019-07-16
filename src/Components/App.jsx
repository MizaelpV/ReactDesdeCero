import React from 'react';
import "../style/styles.scss" 
// import Banner from " ./Organism/banner"
import Form from './Pages/Form'
import CourseGrid from './Organism/CourseGrid'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from './Pages/Course'
import MainMenu from "./Organism/MainMenu"
import History from "./Pages/History"
import Home from './Pages/Home';
import Users from './Pages/Users';


const App = () => (
<Router>
<MainMenu />
<History />
  <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/cursos/:id" component={Course} />
  <Route path="/cursos" component={CourseGrid} />
  <Route path="/usuarios" component={Users} />
  <Route path="/formulario"  component = { () => <Form name="Pagina de contacto" />} />
  <Route component = {() => (
    <div className="ed-grid">
    <h1>Error 404</h1>
    <img className="m-cols-3"src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-13496.jpg" alt="Error 404"/>
    <span>Página no encontrada</span>
    </div>
  )}/>
  </Switch>
</Router>
)
export default App;

//Manera de imprimir la grilla de cursos recorriendo un array y con la maquetación adecuada
/* <div className="ed-grid m-grid-3">
{
  cursos.map( c => <Curso title={c.title} image={c.image} nombre={c.nombre} apellido={c.apellido} price={c.price} imageTiny={c.imageTiny}
  />)
}
</div> */