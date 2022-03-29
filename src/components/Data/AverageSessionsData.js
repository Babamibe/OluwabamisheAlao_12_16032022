import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../../services/API';

export function AverageSessionsData(props) {
    const {id} = useParams()    
    const data = GetData(id, "average-sessions")
    const average = data.data
    
    return (
        <div>
            {average? average.map((session, i) => {
                return (
                    <div key={`session-${i}`}>
                        <p>Day: {session.day}, <span>session length {session.sessionLength}</span></p>
                    </div>
                    
                )
            }): "loading"}
            
        </div>
    );    
    
}