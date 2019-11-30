import React from 'react';
import styled from 'styled-components';


const Line = styled.div`

    width:10px;
    height:2px;
    background-color: ${({ notActive }) => (notActive ? '#dbdbdb' : '#b2c200')};
    margin-top:4px

`;


export default Line