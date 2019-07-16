import React from "react"
import CourseCard from "../Molecules/CourseCard"


const courses = [
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
    "image": "https://image.freepik.com/foto-gratis/composicion-playa-verano-fondo_24837-241.jpg",
    "nombre": "Raul",
    "apellido": "Ramirez",
    "price": 25,
    "imageTiny": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Google%20analytics%20desde%20cero.png"
  }
]


const CourseGrid = () => (
<div className="ed-grid m-grid-4">
    {courses.map(c => (
    <CourseCard
    key={c.id} 
    id={c.id}
    price={c.price}
    title={c.title}
    image={c.image}
    nombre={c.nombre}
    apellido={c.apellido}
    imageTiny={c.imageTiny}
   
    />))}
</div>
)

export default CourseGrid