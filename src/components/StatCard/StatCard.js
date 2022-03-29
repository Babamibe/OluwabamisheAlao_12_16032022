import React from "react";
import './StatCard.css'
import {PropTypes} from 'prop-types'

export default function StatCard(props) {
    
    return (
        <article className="statcard">
            <div className={`statcard--img__container ${props.class}`}>
                <img src={props.src} alt="" className={`statcard--img`} />
            </div>
            <div>
                <p className="statcard--info">{`${props.value !==0 ? format(props.value): ""}${props.unit}`}</p>
                <p className="statcard--category">{props.type}</p>
            </div>
        </article>
    )
}



StatCard.propTypes = {
    class: PropTypes.string,
    unit : PropTypes.string,
    value : PropTypes.number,
    type: PropTypes.string
}

function format(value) {
    if(value) {
        value = value.toString();
        if(value.length < 4) {
            return value
        }
        return `${format(value.slice(0, -3))},${value.slice(-3)}`
    }
    return 0
}