import React from 'react';
import './DailyActivityChart.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import GetData from '../../services/API';
import PropTypes from 'prop-types'

const customTooltip = ({active, payload}) => {
  if(active && payload && payload.length) {
    return (
      <div className='stat--daily'>
        <p className="stat--kg">{`${payload[0].value}kg`}</p>
        <p className="stat--cal">{`${payload[1].value}kCal`}</p>
      </div>
    )
  }
  return null
}

/**
 * Get daily activity data from API and create a bar chart
 * @param {Object} data
 * @param {Array} activity
 * @param {Number} minYaxisKg
 * @param {Number} maxYaxisKg
 * @param {Number} minYaxisKcal
 * @param {Number} maxYaxisKcal
 */

export default function DailyActivityChart({userId}) {

  const data = GetData(userId, "activity")
  const activity = data.data.formattedUserData
  const minYaxisKg = data.data.minimumYaxisKg
  const maxYaxisKg = data.data.maximumYaxisKg
  const minYaxisKcal = data.data.minimumYaxisKcal
  const maxYaxisKcal = data.data.maximumYaxisKcal

    return (
        <ResponsiveContainer width="100%" height="60%">
          <BarChart
            data={activity}
            margin={{
              top: 0,
              right: 40,
              left: 40,
              bottom: 5,
            }}
            barCategoryGap={15}
            barGap={8}
          >
            <CartesianGrid 
            strokeDasharray="3" 
            vertical={false} 
            />
            <XAxis dataKey="day"/>
            <YAxis 
            dataKey="kilogram" 
            yAxisId="left" 
            orientation='right' 
            domain={[minYaxisKg, maxYaxisKg]} 
            axisLine={false} 
            tickLine={false} 
            />
            <YAxis 
            dataKey="calories" 
            yAxisId="right" 
            orientation='right' 
            hide={true} 
            domain={[minYaxisKcal, maxYaxisKcal]} 
            />
            <Tooltip content={customTooltip} />
            <Bar 
            dataKey="kilogram" 
            fill="#282D30" 
            barSize={7} 
            radius={[50, 50, 0, 0]} 
            yAxisId="left" 
            minPointSize={5}
            />
            <Bar 
            dataKey="calories" 
            fill="#E60000" 
            barSize={7} 
            radius={[50, 50, 0, 0]} 
            yAxisId="right"
            />
          </BarChart>
        </ResponsiveContainer>
      );
}

DailyActivityChart.propTypes = {
  userId : PropTypes.string.isRequired
}