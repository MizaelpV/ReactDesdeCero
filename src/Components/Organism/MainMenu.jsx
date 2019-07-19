import React from "react"
import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import CarCounter from "../Atoms/CarCounter";
 

const MainMenu = () => (
<header className="main-header">
  <div className="ed-grid s-grid-5 lg-grid-4">
   <div className="s-cols-4 lg-cols-1 s-cross-center">
     <Link to="/">
     <img src="https://ed.team/static/images/logo-premium.svg" alt="title"/>
     </Link>
   </div>
   <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
     <nav className="main-menu" id="main-menu">
        <ul>
            <li><NavLink exact to="/" exact activeClassName="activo" >Inicio </NavLink></li>
            <li><NavLink to="/cursos" activeClassName="activo" >Ir a cursos</NavLink></li>
            <li><NavLink to="/formulario" activeClassName="activo">Formulario</NavLink></li>
            <li><NavLink to="/usuarios" activeClassName="activo">Usuarios</NavLink></li>
            <CarCounter />
        </ul>
    </nav>
    <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
    </div>
</div>
    </header>
)

export default MainMenu