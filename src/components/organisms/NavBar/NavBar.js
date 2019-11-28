import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/index';




const Nav = styled.nav`
    position:absolute;
    top:0;
    left:0;
    width:100%;
  display:flex;
  border-bottom:1px solid #e1e1e1;
   /* justify-content: space-evenly;  */
`;
const ListItem = styled.li`
 list-style:none;
 
`;
const StyledLink = styled(NavLink)`
text-transform: uppercase;
  text-decoration:none;
  font-weight:bold;
  &.active {
    color:#ff801a !important;
    border-bottom:2px solid #ff801a;
    border-radius: 1px;
    }
  &:visited {
    color: black;
    }


`;



const ListOfNavItem = styled.ul`
  flex-basis:30%;
  display: flex;
  justify-content: space-evenly;
  padding:20px;
  border-left: 1px solid #e1e1e1;
  height: 100%;


`;

const UserBox = styled.div`

`;
const User = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  border: 1px solid black;
`;






const NavBar = () => {
    return (
        <Nav>

            <ListOfNavItem>
                <ListItem>
                    <StyledLink to={routes.dashboard} > Dashboard</StyledLink>
                </ListItem>
                 <ListItem>
                    <StyledLink to={routes.recipes} > Recipes</StyledLink>
                </ListItem>
                 <ListItem>
                    <StyledLink to={routes.challenge} > Challenge</StyledLink>
                </ListItem>
            </ListOfNavItem>
            <UserBox>
              <User/>
            </UserBox>


        </Nav>
    )
}

export default NavBar;