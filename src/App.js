import './App.css';
import React from 'react';
import Home from './containers/Home/Home';
import { Navigate, Route,Routes} from 'react-router-dom';
import Error404 from './components/Error 404/Error404';
import  { MainData } from './components/Data/MainData';
import { ActivityData } from './components/Data/ActivityData';
import {AverageSessionsData} from './components/Data/AverageSessionsData'
import { ScoreData } from './components/Data/ScoreData';
import { PerformanceData } from './components/Data/PerformanceData';
import { KeyData } from './components/Data/KeyData';



function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path='/' element={<Navigate replace to="/home/12" />} />
        
        <Route path='/home/:userId' element={<Home/>}/>
        <Route path='/user'>
          <Route path=':id' element={<MainData/>}/>
          <Route path=':id/activity' element={<ActivityData/>} />
          <Route path=':id/average-sessions' element={<AverageSessionsData/>} />
          <Route path=':id/today-score' element={<ScoreData/>} />
          <Route path=':id/activities' element={<PerformanceData/>} />
          <Route path=':id/key-data' element={<KeyData/>} />
        </Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

