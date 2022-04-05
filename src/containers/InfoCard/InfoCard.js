import React from 'react';
import GetData from '../../services/API';
import StatCard from '../../components/StatCard/StatCard'
import energy from '../../assets/energy.png'
import chicken from '../../assets/chicken.png'
import apple from '../../assets/apple.png'
import cheeseburger from '../../assets/cheeseburger.png'
import  PropTypes  from 'prop-types';

/**
 * Get keydata from API and create info card section
 * @param {Object} data 
 * @param {Array} keyData 
 */
export default function InfoCard({userId}) {
    const data = GetData(userId, "keyData")
    const keyData = data.data
    
    return (
        <div className="info-card--section">
            <StatCard value={keyData.calorieCount } type={"Calories"} unit="kCal" src={energy} class="calorie" />
            <StatCard value={keyData.proteinCount} type={"Protéines"} unit="g" src={chicken} class="proteine" />
            <StatCard value={keyData.carbohydrateCount} type={"Glucides"} unit="g" src={apple} class="glucide" />
            <StatCard value={keyData.lipidCount} type={"Lipides"} unit="g" src={cheeseburger} class="lipide" />
        </div>
    );
}

InfoCard.propTypes ={
    userId : PropTypes.string.isRequired
}

