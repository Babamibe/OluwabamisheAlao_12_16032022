import React from "react";
import './Home.css'
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import { useParams } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export default function Home(props) {
    let {userId} = useParams()
    

    return (
        <div>
            <Header/>            
            <main className="main">
                <SideNav/>
                <Dashboard 
                userId={userId}
                />                

            </main>
        </div>
        
    )
}