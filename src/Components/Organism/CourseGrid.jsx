import React from "react"
import CourseCard from "../Molecules/CourseCard"
import withLoader from "../HOC/withLoader";

const CourseGrid = ({courses}) => (
    <div className="ed-grid m-grid-4">
{ 
 courses.map(c => 
(<CourseCard
key={c.id} 
id={c.id}
price={c.price}
title={c.title}
image={c.image}
nombre={c.nombre}
apellido={c.apellido}
imageTiny={c.imageTiny}

/>))
}
</div>
)

export default withLoader("courses", CourseGrid)