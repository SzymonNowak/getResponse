import React from 'react';
import NavBar from '../components/organisms/NavBar/NavBar';
import BottomBoxInfo from '../components/organisms/BottomBoxInfo/BottomBoxInfo';
import DotBox from '../components/molecules/DotBox/DotBox';
const UserPageTemplate = ({ children}) => (
  <>
      {/* <NavBar/>
    <BottomBoxInfo/> */}
      <DotBox/>
      {children}
  </> 
 
);



export default UserPageTemplate;
