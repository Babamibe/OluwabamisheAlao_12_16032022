import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../../services/API';

export function PerformanceData(props) {
    const {id} = useParams()    
    const data = GetData(id, "performance")
    const performance = data.data
    console.log("user", performance)
    
    return (
        <div>
            {performance ? performance.map((item, i) => {
                return ( 
                        <div key={`performance-${i}`}>
                            <span>{item.kind}: {item.value} </span>
                        </div>                    
                )
            }): "loading"}
            
        </div>
    );    
    
}