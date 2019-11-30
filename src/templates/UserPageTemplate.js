import React from 'react';
import NavBar from '../components/organisms/NavBar/NavBar';
import BottomBoxInfo from '../components/organisms/BottomBoxInfo/BottomBoxInfo';
import TopBar from '../components/organisms/TopBar/TopBar';
const UserPageTemplate = ({ children}) => (
  <>
       <NavBar/> 
      <TopBar/>
    <BottomBoxInfo/> 
      {children}
  </> 
 
);



export default UserPageTemplate;
