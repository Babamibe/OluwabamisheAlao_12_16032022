import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../../services/API';

export function ScoreData(props) {
    const {id} = useParams()    
    const data = GetData(id, "score")
    const score = data.data
    
    return (
        <div>
            {score ? `Score: ${score * 100}%`: "loading"}
        </div>
    );    
    
}