import React from "react"

const defaultAdress = "http://localhost:3000/user"

/**
 * Fetch data from API
 * @param {String} id 
 * @param {String} type 
 * @returns {Array}
 */

export default function GetData(id, type) {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const endpoint = getEndpoint(type, id)


    // let url = `http://localhost:3000/user/${id}`
    // let activity = `http://localhost:3000/user/${id}/activity`
    // let averageSessions = `http://localhost:3000/user/${id}/average-sessions`
    // let performance = `http://localhost:3000/user/${id}/performance`

    React.useEffect(()=> {
        if(!endpoint) {
            return
        }
        setLoading(true)
        async function fetchInfo(){
            try {
                const url = `${defaultAdress}/${endpoint}`
                const res = await fetch(url)
                const info = await res.json()
                const returnedInfo = getInfoByType(info, type)
                setData(returnedInfo)
            } catch(e) {
                console.error(e)
            } finally {
                setLoading(false)
            }           
        }       
       
        fetchInfo()
    },[id, type, endpoint])
    return {data, loading}
}

/**
 * Choose API endpoint for fetching data
 * @param {String} type 
 * @param {String} id 
 * @returns {String}
 */
function getEndpoint(type, id) {
    switch(type) {
        case "user":return `${id}`;
        case "firstName": return `${id}`
        case "keyData": return `${id}`
        case "score": return `${id}`
        case "activity": return `${id}/activity`;
        case "average-sessions": return `${id}/average-sessions`;
        case "performance": return `${id}/performance`;
        default:return null;

    }
}

/**
 * Get specified data according to type
 * @param {Array | String | Object} info 
 * @param {String} type 
 * @returns {Array|String|Object|Number|Undefined}
 */
function getInfoByType(info, type) {
    if(info) {
        switch(type) {
            case "user" : return getUserData(info);
            case "firstName": return getfirstNameData(info);
            case "keyData": return getKeyData(info.data.keyData);
            case "score": return getScoreData(info.data);
            case "activity": return getActivityData(info.data.sessions);
            case "average-sessions": return getAverageSessionsData(info.data.sessions);
            case "performance": return getPerformanceData(info.data.data);
            default : console.log("no data found"); return
        }
    }
    console.error('error');
    return
}

/**
 * Get the user's main data
 * @param {Array} userData 
 * @returns {Array | Object | Null}
 */

function getUserData(userData) {
    if(userData) {
        return userData.data
    }
    return null
    
}

/**
 * Get user's first name
 * @param {Array|Object} userData 
 * @returns {String}
 */
function getfirstNameData(userData) {
    if(userData) {
        return userData.data.userInfos.firstName
    }
    console.log('unknown user')
    return "unknown user"
}

/**
 * Get user's key data
 * @param {Array|Object} userData 
 * @returns {Object|Array}
 */
function getKeyData(userData) {
    if(!userData) {
        return {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
        }        
    }
    return userData    
}

/**
 * Get user's daily score
 * @param {Array|Object} userData 
 * @returns {String | Number}
 */
function getScoreData(userData) {
    if(userData) {
        return userData.score || userData.todayScore
    }
    return 0
}

/**
 * Get user's daily activity data
 * @param {Object | Array} userData 
 * @returns {Object | Number | Array}
 */
function getActivityData(userData) {
    if(userData) {
        const formattedUserData = userData.map(item => {
            // eslint-disable-next-line no-unused-vars
            const [yyyy, mm, dd] = item.day.split("-")
            return {...item, day : dd}
        })
        return {
            formattedUserData : formattedUserData,
            mininumYaxisKg : Math.min(...formattedUserData.map((elt) => elt.kilogram)) - 1,
            maximumYaxisKg : Math.max(...formattedUserData.map((elt) => elt.kilogram)) + 2,
            minimumYaxisKcal : Math.min(...formattedUserData.map((elt) => elt.calories)) - 50,
            maximumYaxisKcal : Math.max(...formattedUserData.map((elt) => elt.calories)) + 50,
        }
    }
    return defaultActivityData()
}

/**
 * Default data for daily activity
 * @returns {Array | Object}
 */
function defaultActivityData() {
    let date = [{day: 1}, {day:2}, {day:3}, {day:4}, {day:5}, {day:6}, {day:7}]
    date.map(item => {
        return {...item, kilogram: 0, calories: 0}
    })
    return date
}

/**
 * Get user's average session's data
 * @param {Array|Object} userData 
 * @returns {Array|Object}
 */
function getAverageSessionsData(userData) {
    if(userData) {
        let average = defaultAverageSessionsData()
        const session = userData.map((item, i) => {
            return {...item, day: average[i].day}
        })
        return session
        
    }
    return defaultAverageSessionsData()
}

/**
 * Default data for average sessions
 * @returns {Array}
 */
function defaultAverageSessionsData() {
    const average = [
        {
          day: "L",
          sessionLength: 0,
        },
        {
          day: "M",
          sessionLength: 0,
        },
        {
          day: "M",
          sessionLength: 0,
        },
        {
          day: "J",
          sessionLength: 0,
        },
        {
          day: "V",
          sessionLength: 0,
        },
        {
          day: "S",
          sessionLength: 0,
        },
        {
          day: "D",
          sessionLength: 0,
        },
      ];

    return average
}

/**
 * Get user's performance data
 * @param {Array|Object} userData 
 * @returns {Array|Object}
 */
function getPerformanceData(userData) {
    if(userData) {
        const activityKind = {
            1: 'Cardio',
            2: 'Energie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensit??'
        }
        let performanceData = userData.map(item => {
            return {...item, kind: activityKind[item.kind], value: item.value}
        })
        return performanceData
    }
    return defaultPerformanceData()
    
}

/**
 * Default performance data
 * @returns {Array}
 */
function defaultPerformanceData() {
    const activityKind = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensit??'
    }
    const performance = []
    for(let i of activityKind){
        performance.push({kind: activityKind[i], value: 0})
    }
    return performance
    
}