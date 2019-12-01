import React from 'react';
import styled, {css} from 'styled-components';


const Dot = styled.div`

    width:10px;
    height:10px;
    border-radius:50%;
    background-color: ${({ notActive }) => (notActive ? '#dbdbdb' : '#b2c200')};
    background-color: ${({ active }) => (active ? 'white !important' : '#b2c200')};
    border:${({ active }) => (active ? '2px solid  #e1e1e1' : 'none')};
    position: relative;
`;


export default Dot