import React from 'react';
import NavBar from '../components/organisms/NavBar/NavBar';
import MealPlan from '../components/organisms/MealPlan/MealPlan';
import BottomBoxInfo from '../components/organisms/BottomBoxInfo/BottomBoxInfo';



const Dashboard = () => {
    return (
        <>
            <NavBar/>
            <MealPlan/>
            <BottomBoxInfo/>
        </>
    )
}

export default Dashboard;