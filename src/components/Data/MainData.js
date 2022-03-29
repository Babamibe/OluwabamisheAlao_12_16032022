import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../../services/API';

export function MainData(props) {
    const {id} = useParams()    
    const data = GetData(id, "user")
    const userInfo = data.data.userInfos
    
    return (
        <div>            
            <p>Id:{id} </p>
            <p>First name: {userInfo? userInfo.firstName : "loading"}</p>
            <p>Last name: {userInfo? userInfo.lastName : "loading"}</p>
            <p>Age: {userInfo? userInfo.age : "loading"}  </p> 
        </div>
    );    
    
}



