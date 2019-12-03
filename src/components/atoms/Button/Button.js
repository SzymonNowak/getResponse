
import styled from 'styled-components';


const Button = styled.button`
 font-family: "Arimo", sans-serif;
    width:140px;
    height:40px;
    border-radius: 0.5rem;
    background-color:transparent;
    border: 1px solid #bebebe;
    font-size:20px;
    color: ${({theme}) => theme.oneMoreGrey};
    transition: 0.3s;
    letter-spacing:0.5px;
    font-weight:500;

    &:hover {
    border: 1px solid #ff801a;
    background-color: ${({theme}) => theme.orange};
    font-weight:bold;
    color: ${({theme}) => theme.white};
    }

`;


export default Button;