import './App.css';
import React from 'react';
import Home from './containers/Home/Home';
import { Navigate, Route,Routes} from 'react-router-dom';
import Error404 from './components/Error 404/Error404';



function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path='/' element={<Navigate replace to="/home/12" />} />
        
        <Route path='/home/:userId' element={<Home/>}/>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

