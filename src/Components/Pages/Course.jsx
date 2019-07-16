import React from "react"

const cursos = [
    {
    "id": 1,
    "title": "React desde cero",
    "image": "https://image.freepik.com/foto-gratis/composicion-playa-verano-fondo_24837-241.jpg",
    "nombre": "ROberto",
    "apellido": "Ramirez",
    "price": 25,
    "imageTiny": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Google%20analytics%20desde%20cero.png"
  },
  { 
  "id": 2,    
  "title": "React desde cero",
  "image": "https://image.freepik.com/foto-gratis/composicion-playa-verano-fondo_24837-241.jpg",
  "nombre": "ROberto",
  "apellido": "Ramirez",
  "price": 25,
  "imageTiny": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Google%20analytics%20desde%20cero.png"
  },
  {
    "id": 3,
    "title": "React desde cero",
    "image": "https://image.freepik.com/foto-gratis/composicion-playa-verano-fondo_24837-241.jpg",
    "nombre": "ROberto",
    "apellido": "Ramirez",
    "price": 25,
    "imageTiny": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Google%20analytics%20desde%20cero.png"
  },
  {
    "id": 4,
    "title": "React desde cero",
    "image": "https://image.freepik.com/vector-gratis/llamarada-dorada-brillante-destellos-fondo_1017-19500.jpg",
    "nombre": "Raul",
    "apellido": "Ramirez",
    "price": 25,
    "imageTiny": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Google%20analytics%20desde%20cero.png"
  }
]
//Recorre el array segun la url que se solicite, y hace el contenido dinámico, también hace una validación de si existe el curso y en caso de que no, manejar el error 404.

const Course = ({match}) => {
    const cursoActual = cursos.filter( c => c.id === parseInt(match.params.id))[0]

    return (
    <div className="ed-grid m-grid-3">
    {
        cursoActual ? (
            <>
        <h1>{cursoActual.title}</h1>
        <img className="m-cols-1" src ={cursoActual.image} alt={cursoActual.title}/>
        <p className="m-cols-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos, nisi non cum, incidunt omnis neque asperiores ab perferendis, temporibus sapiente nesciunt sit repudiandae labore. Dicta obcaecati ratione error dolor.</p>
            </>
        ):(
    <h1>El curso no existe</h1>
     )
    }
     </div>
  )
}

export default Course