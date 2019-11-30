
import styled from 'styled-components';


const Button = styled.button`
 font-family: "Arimo", sans-serif;
    width:100px;
    height:30px;
    border-radius: 0.5rem;
    background-color:transparent;
    border: 1px solid #bebebe;
    color: ${({theme}) => theme.oneMoreGrey};
    transition: 0.3s;
    font-weight: bold;

    &:hover {
    border: 1px solid #ff801a;
    background-color: ${({theme}) => theme.orange};
    font-weight:bold;
    color: ${({theme}) => theme.white};
    }

`;


export default Button;