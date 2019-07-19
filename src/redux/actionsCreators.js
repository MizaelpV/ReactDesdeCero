import { ADD_TO_CAR, REMOVE_FROM_CAR, GET_COURSE_LIST } from "./actions";
import Axios from "axios";

const addToCar = id =>({
    type: ADD_TO_CAR,
    id
})

const removeFromCar = id => ({
    type: REMOVE_FROM_CAR,
    id
})

const getCourseList = () => dispatch => {
    Axios.get('http://my-json-server.typicode.com/MizaelpV/JsonDB/cursos')
    .then(response => {
        return dispatch({
            type: GET_COURSE_LIST,
            courses: response.data

        })
    })
}

export {addToCar, removeFromCar, getCourseList} 