import styled from 'styled-components';


const Line = styled.div`

    width:11px;
    height:2px;
    background-color: ${({ notActive }) => (notActive ? '#dbdbdb' : '#b2c200')};
    margin-top:6px

`;


export default Line