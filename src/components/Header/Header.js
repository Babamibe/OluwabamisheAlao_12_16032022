import React from "react";
import './Header.css';
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header--logo__link">
                <img className="header--logo__img" src={logo} alt=""/>
            </Link>
            <nav className="header--nav">
                <NavLink className="header--nav__link" to="/">Accueil</NavLink>
                <NavLink className="header--nav__link" to="/">Profil</NavLink>
                <NavLink className="header--nav__link" to="/">Réglage</NavLink>
                <NavLink className="header--nav__link" to="/">Communauté</NavLink>
            </nav>
        </header>
    )
}