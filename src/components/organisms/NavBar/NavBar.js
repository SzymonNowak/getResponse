import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/index';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import UserAvatar from '../../atoms/UserAvatar/UserAvatar';
import DeafultUserIcon from '../../../assets/user-solid.svg';
import DownArrow from '../../../assets/idk.png';



const Nav = styled.nav`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    display:flex;
    border-bottom:${({theme}) => theme.borders.grey100};
    /* justify-content: space-evenly;  */
    justify-content: center; 

    box-shadow: 0px 0px 10px #e1e1e1;
    
`;

const ListItem = styled.li`
 list-style:none;
 margin-right: 30px;
`;

const StyledLink = styled(NavLink)`
text-transform: uppercase;
  text-decoration:none;
  font-weight:bold;
  position: relative;
  &.active {
    color: ${({theme}) => theme.orange} !important;
    &:after {
    content: " ";
    position: absolute;
    top:6;
    left:35%;
    margin-top:6px;
    display:block;
    width:20px;
    border-bottom:${({theme}) => theme.borders.orange};
      }
    }
  &:visited  {
    font-weight:bold;
    color: ${({theme}) => theme.oneMoreGrey};
    }
    &:hover {
      color:${({theme}) => theme.green};
    }
`;



const ListOfNavItem = styled.ul`
  width:450px;
  height:60px;
  display: flex;
  justify-content: space-evenly;
  border-left: ${({theme}) => theme.borders.grey100};
  align-items:center;
 

`;

const UserBoxWrapper = styled.div`
margin-left:200px;
  display:flex;
   align-items:center;

`;


const StyledParagraph = styled.p`
    color: ${({theme}) => theme.oneMoreGrey};

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
            
            <UserBoxWrapper>
              <UserAvatar icon={DeafultUserIcon}/>
              <StyledParagraph>Szymon Nowak</StyledParagraph>
              <ButtonIcon icon={DownArrow}/>
            </UserBoxWrapper>


        </Nav>
    )
}

export default NavBar;