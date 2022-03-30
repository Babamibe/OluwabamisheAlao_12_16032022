import React from 'react';
import Title from "../../components/Title/Title"
import AverageSessionChart from "../../components/AverageSessionChart/AverageSessionChart";
import ActivityTypeChart from "../../components/ActivityTypeChart/ActivityTypeChart"
import DailyActivity from "../../components/DailyActivity/DailyActivity";
import ScoreChart from "../../components/ScoreChart/ScoreChart"
import InfoCard from '../InfoCard/InfoCard';
import PropTypes from 'prop-types'

export default function Dashboard({userId}) {
    return (
        <section className="dashboard">
                    <Title user={userId}/>
                    <div className="stat--section">
                        <div className="graphics--section">
                            <DailyActivity userId={userId} />
                            <div className="chart--section">
                                <AverageSessionChart userId={userId}/>
                                <ActivityTypeChart userId={userId} />
                                <ScoreChart userId={userId }/>
                            </div>
                        </div>
                        <InfoCard userId={userId} />
                    </div>
                    
                </section>
    );
}

 Dashboard.propTypes = {
     userId : PropTypes.string
 }