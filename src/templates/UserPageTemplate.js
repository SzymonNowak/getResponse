import React from 'react';
import NavBar from '../components/organisms/NavBar/NavBar';
import BottomBoxInfo from '../components/organisms/BottomBoxInfo/BottomBoxInfo';
import DotBox from '../components/molecules/DotBox/DotBox';
import WeekChanger from '../components/molecules/WeekChanger/WeekChanger';
const UserPageTemplate = ({ children}) => (
  <>
       <NavBar/>
    <BottomBoxInfo/> 
      <DotBox/>
      <WeekChanger/>
      {children}
  </> 
 
);



export default UserPageTemplate;
