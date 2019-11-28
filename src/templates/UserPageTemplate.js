import React from 'react';
import NavBar from '../components/organisms/NavBar/NavBar';

const UserPageTemplate = ({ children}) => (
  <>
      <NavBar/>
      {children}
  </> 
 
);



export default UserPageTemplate;
