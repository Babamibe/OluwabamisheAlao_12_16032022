import React from 'react';
import './ScoreChart.css'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import GetData from '../../services/API';
import PropTypes from 'prop-types'




export default function ScoreChart({userId}) {
    const data = GetData(userId, "score")
    const score = data.data
    const scoreData = [
        { name: "completed", value: score, fillColor: `#FF0000` },
        { name: "not-completed", value: 1 - score, fillColor: "transparent" },
    ];

    const innerPie = [{value: 100}]
    return (
        <div className='scorechart--box'>
            <h3 className='scorechart--title'>Score</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={180} height={180}>
                <Pie data={innerPie} dataKey="value" outerRadius={70} fill="white"/>
                <Pie 
                data={scoreData} 
                dataKey="value"
                innerRadius={70} 
                outerRadius={80}
                startAngle={90}
                endAngle={360}
                stroke={"transparent"}
                >
                    {scoreData.map((entry, index) => (
                        <Cell
                        key={`cell-${index}`}
                        fill={entry.fillColor}
                        cornerRadius="50%"
                        />
                    ))}
                    
                </Pie>
                </PieChart>
                
            </ResponsiveContainer>
            <p className='scorechart--text'><span className='scorechart--score'>{`${score *100}%`}</span> <br/> de votre <br/> objectif</p>
        </div>
    );
}

ScoreChart.propTypes = {
    score : PropTypes.array,
    userId : PropTypes.string
}