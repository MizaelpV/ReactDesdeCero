import React from "react"
import {connect} from "react-redux"

const CarCounter = ({carLength}) => (
    <li>
        <button className="button tiny ghost">{`Carrito: ${carLength.length}`}</button>
    </li>
)

const mapStateToProps = state => (
    {
        carLength: state.car
    }
)

const mapDispatchToProps= () => {

}

export default  connect(mapStateToProps, mapDispatchToProps)(CarCounter)