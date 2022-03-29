import React from 'react';
import './AverageSessionChart.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import GetData from '../../services/API';


const customTooltip = ({active, payload}) => {
    if(active && payload && payload.length) {
      return (
        <div className='stat--average'>
          <p className="stat--min">{`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null
  }

 export default function AverageSessionChart({userId}) {
    const info = GetData(userId, "average-sessions")
    const sessions = info.data
    return (
        <div className='linechart-box'>
           <p className='linechart-box--title'>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={300}
                height={300}
                data={sessions}
                outerRadius="75%"
                margin={{
                    top: 0,
                    right: 12,
                    left: 12,
                    bottom: 5,
                }}
                >
                
                <XAxis 
                dataKey="day" 
                tickLine={false}
                axisLine={false}
                tick={{
                    fill : '#fff',
                    fontSize: 12,
                    fontWeight: 500,
                }} 
                />
                <YAxis 
                dataKey="sessionLength" 
                hide={true}
                domain={[0, "dataMax + 50"]}  
                />
                <Tooltip 
                content={customTooltip} 
                cursor={{stroke: "rgba(0,0,0,0.1)", strokeWidth: 35}}
                />
                <Line 
                type="monotone" 
                dataKey="sessionLength" 
                stroke="rgba(255, 255, 255, 0.4)" 
                strokeWidth={3} 
                dot={false} 
                activeDot={{stroke:"rgba(255, 255, 255, 1)" ,r: 5, fill: "rgba(255,255,255,1)"}} />
                </LineChart>
            </ResponsiveContainer>
    
        </div>
    );
}
