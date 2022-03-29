import React from "react";
import './SideNav.css'
import { Link } from "react-router-dom";
import SideNavItem from "../SideNavItem/SideNavItem";
import yoga from "../../assets/yoga.png"
import swim from "../../assets/swim.png"
import bike from "../../assets/bike.png"
import weight from "../../assets/weight.png"

export default function SideNav() {
    return (
        <aside className="sidenav--section">
            <nav className="sidenav--nav">
                <Link className="sidenav--link" to="/">
                    <SideNavItem icon={yoga}/>
                </Link>
                <Link className="sidenav--link" to="/">
                    <SideNavItem icon={swim}/>
                </Link>
                <Link className="sidenav--link" to="/">
                    <SideNavItem icon={bike}/>
                </Link>
                <Link className="sidenav--link" to="/">
                    <SideNavItem icon={weight} />
                </Link>
            </nav>
            <div className="sidenav--copyright">
                <p className="sidenav--copyright__text">Copyright, SportSee 2020</p>
            </div>
        </aside>
    )
}