import React from 'react';
import NavBar from '../components/organisms/NavBar/NavBar';
import BottomBoxInfo from '../components/organisms/BottomBoxInfo/BottomBoxInfo';
const UserPageTemplate = ({ children}) => (
  <>
    <BottomBoxInfo/>
      <NavBar/>
      {children}
  </> 
 
);



export default UserPageTemplate;
