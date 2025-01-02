import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home/Home.tsx';
const AppRoute = () => {
    return(
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes> 
    </Router>);
}

export default AppRoute;