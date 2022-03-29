import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../../services/API';

const path = ["activity", "average-sessions", "today-score", "activities", "key-data"]
export function ActivityData(props) {
    const {id} = useParams()    
    const data = GetData(id, "activity")
    const activity = data.data.formattedUserData
    
    return (
        <div>
            {activity ? activity.map((item, i) => {
                return ( 
                        <div key={`activity-${i}`}>
                            <span>Day: {item.day}, KG: {item.kilogram}, KCal: {item.calories} </span>
                        </div>                    
                )
            }): "loading"}
            
        </div>
    );    
    
}