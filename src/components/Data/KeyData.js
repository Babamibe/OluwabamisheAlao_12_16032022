import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../../services/API';

export function KeyData(props) {
    const {id} = useParams()    
    const data = GetData(id, "keyData")
    const keydata = data.data

    const test = Object.getOwnPropertyNames(keydata)
    const value = [keydata.calorieCount, keydata.proteinCount, keydata.carbohydrateCount, keydata.lipidCount ]
    
       
    return (
        <div>
            {keydata? test.map((item, i) => {
                return <p key={i}>{item}: {value[i]} </p>
            }) : "loading"}
        </div>
    )
    
    

    
    
}