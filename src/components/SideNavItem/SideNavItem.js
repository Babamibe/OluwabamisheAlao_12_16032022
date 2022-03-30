import React from "react";
import PropTypes from 'prop-types'

export default function SideNavItem(props) {
    return (
        <img className="sidenav--img" src={props.icon} alt=""/>
    )
}

SideNavItem.propTypes = {
    icon : PropTypes.string.isRequired
}