import React from 'react'
import Proptypes from 'prop-types'
import {Link} from "react-router-dom"

const CourseCard = ({title, image, price, nombre, apellido, imageTiny, id}) => (
    <>  
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <Link to={`/cursos/${id}`}>
      <img src={image} alt={title}/>
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
          {title}
      </h3> 
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src={imageTiny} alt="imagenPequeña"/>
              </div>
              </div>
          <span className="small">{`${nombre} ${apellido}`}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://www.google.com">{`$${price}`}</a>
      </div>
    </div>
  </article>
  </>
)

CourseCard.propTypes = {
  title: Proptypes.string,
  image: Proptypes.string,
  price: Proptypes.number,
  nombre:Proptypes.string,
  apellido: Proptypes.string,
  imageTiny: Proptypes.string
}
CourseCard.defaultProps = {
  title: "No se encontró titulo",
  image: "http://2.bp.blogspot.com/-ndToICeJr7k/VDbmM4LasgI/AAAAAAAAAQI/P8eupazjpdk/s1600/tulum2.jpg",
  price: 0,
  nombre: "Mizael",
  apellido: "Paredes",
  imageTiny: "https://images.techhive.com/images/article/2016/01/thinkstockphotos-481493125-100638928-large.jpg"
}
export default CourseCard