import React from 'react'
import Proptypes from 'prop-types'

const curso = {
  "id": 1,
  "title": "React desde cero",
  "nombre": "Mizael",
  "image": "https://image.freepik.com/free-vector/colorful-watercolor-background_79603-99.jpg",
  "apellido": "Paredes", 
  "price": 60,
  "imageTiny": "https://image.flaticon.com/icons/svg/865/865138.svg"
}



const Curso = ({title,image, price, nombre, apellido,imageTiny}) => (
    <>  
    <div className="ed-grid m-grid-3">
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title}/>
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
  </div>
  </>
)

  Curso.propTypes = {
  title: Proptypes.string,
  image: Proptypes.string,
  price: Proptypes.number,
  nombre:Proptypes.string,
  apellido: Proptypes.string,
  imageTiny: Proptypes.string
}
Curso.defaultProps ={
  title: "No se encontró titulo",
  image: "http://2.bp.blogspot.com/-ndToICeJr7k/VDbmM4LasgI/AAAAAAAAAQI/P8eupazjpdk/s1600/tulum2.jpg",
  price: 0,
  nombre: "Mizael",
  apellido: "Paredes",
  imageTiny: "https://images.techhive.com/images/article/2016/01/thinkstockphotos-481493125-100638928-large.jpg"
}
export default Curso 