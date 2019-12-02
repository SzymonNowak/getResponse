import React from 'react';
import NavBar from '../components/organisms/NavBar/NavBar';
import BottomBoxInfo from '../components/organisms/BottomBoxInfo/BottomBoxInfo';
import TopBar from '../components/organisms/TopBar/TopBar';
import MealPlan from '../components/organisms/MealPlan/MealPlan';




const UserPageTemplate = ({ children}) => (
  <>
       {/* <NavBar/> 
      <TopBar/>
    <BottomBoxInfo/>  */}

    <MealPlan/>
      {children}
  </> 
 
);



export default UserPageTemplate;
