
import React, { Component } from "react"
import axios from "axios";
import CourseGrid from "../Organism/CourseGrid"

class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/MizaelpV/JsonDB/cursos')
    .then(resp => this.setState({
      courses: resp.data
    }))
  }

  render() {
    const { courses } = this.state

    return <CourseGrid courses={courses} />
  }
  
}

export default Courses