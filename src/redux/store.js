import {createStore} from "redux"
import { ADD_TO_CAR } from "./actions";

const initialStore = {
    car: []
}

const rootReducer = (state = initialStore, {type, id} ) => {
    if(type === ADD_TO_CAR){
        if(state.car.find(a => a === id)) return state

        return{
            ...state,
            car: state.car.concat(id)
        }
     }
    return state
}

export default createStore(rootReducer)