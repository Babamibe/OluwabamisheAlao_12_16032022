import './ActivityTypeChart.css'
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";
import GetData from '../../services/API';



export default function ActivityTypeChart({userId}) {
    const data =GetData(userId, "performance")
    const performance = data.data
    console.log(performance, "p")
    return (
        <div className='radarchart--box'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="60%" data={performance} >
                <PolarGrid radialLines={false} d=""/>
                <PolarAngleAxis 
                dataKey="kind" 
                stroke='#fff'
                dy={4}
                tickLine={false}
                tick={{
                fontSize: 12,
                fontWeight: 500,
                }}
                d=""
                />
                <Radar 
                dataKey="value" 
                stroke="transparent" 
                fill="rgb(255, 1, 1)" 
                fillOpacity={0.7}
                d=""
                />
                </RadarChart>
            </ResponsiveContainer>
            
        </div>
    );
}
