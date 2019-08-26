import {createStore, applyMiddleware} from "redux"
import { ADD_TO_CAR, REMOVE_FROM_CAR, GET_COURSE_LIST } from "./actions";
// import { composeWithDevTools } from "redux-devtools-extension"
import {combineReducers} from "redux"
import thunk from "redux-thunk";

const initialStore = {
    car: []
}

const initialCourses = {
    courses: []
}

const rootReducer = (state = initialStore, {type, id} ) => {
    if(type === ADD_TO_CAR){
        if(state.car.find(a => a === id)) 
        return state

        return{
            ...state,
            car: state.car.concat(id)
        }
     }
    if (type === REMOVE_FROM_CAR){
        return{
            ...state,
            car: state.car.filter(c => c !== id)
        }
    }

    return state
}

const coursesReducer = (state = initialCourses, action) => {
    if (action.type === GET_COURSE_LIST){
        return{
            ...state,
            courses: action.courses
        }

    }

    return state
}

export default createStore(combineReducers({rootReducer,coursesReducer}), applyMiddleware(thunk))