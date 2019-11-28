import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/index';




const Nav = styled.nav`
  display:flex;
  /* justify-content: space-evenly;
  align-items:baseline;
  margin:20px; 
  grid-area: Nav; */
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








const NavBar = () => {
    return (
        <Nav>
            <ul>
                <ListItem>
                    <StyledLink to={routes.dashboard} > Dashboard</StyledLink>
                </ListItem>
                 <ListItem>
                    <StyledLink to={routes.recipes} > Recipes</StyledLink>
                </ListItem>
                 <ListItem>
                    <StyledLink to={routes.challenge} > Challenge</StyledLink>
                </ListItem>
            </ul>
        </Nav>
    )
}

export default NavBar;