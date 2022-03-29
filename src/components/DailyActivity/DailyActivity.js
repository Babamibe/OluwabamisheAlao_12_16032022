import React from 'react';
import DailyActivityChart from '../DailyActivityChart/DailyActivityChart';
import './DailyActivity.css'

export default function DailyActivity({userId}) {
    
    return (
        <section className='daily-activity--section'>
            <header className='daily-activity--header'>
                <h3 className='daily-activity--title'>Activité quotidienne</h3>
                <div className='daily-activity--stats'>
                    <div className='daily-activity--stat'>
                        <i className='fas fa-circle dark'></i>
                        <p>Poids (kg)</p>
                    </div>
                    <div className='daily-activity--stat'>
                        <i className='fas fa-circle red'></i>
                        <p>Calories brûlées (kCal)</p>
                    </div>
                </div>
            </header>
            <DailyActivityChart userId={userId}/>
        </section>
    );
}

