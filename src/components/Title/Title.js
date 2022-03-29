import React from "react";
import './Title.css'
import GetData from '../../services/API'
import {PropTypes} from 'prop-types'

export default function Title(props) {
    const data = GetData(props.user, "firstName")
    const firstName = data.data
    return (
        <div className="title">
            <h1 className="title--header">Bonjour <span className="title--name">{firstName}</span></h1>
            <h3 className="title--text">Félicitations ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    )
}

Title.propTypes = {
    user: PropTypes.string
}