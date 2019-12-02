import React from 'react';
import styled from 'styled-components';



    const Wrapper = styled.div`
    /* margin-left:px; */
        width:150px;
        height:1053px;
        display:flex;
        flex-direction:column;
        border:1px solid black;

    `;

    const Cell = styled.div`
    border-bottom:1px solid black;
    height:100px;
    `;
    const SecoundCell = styled.div`
    
        border-bottom:1px solid black;
    height:150px;
    `;




const FoodColumn = () => {
    return (
        <Wrapper>
           <Cell>Day 64</Cell>
           <SecoundCell>COs tam</SecoundCell>

           <SecoundCell>COs tam</SecoundCell>
           <SecoundCell>COs tam</SecoundCell>

           <SecoundCell>COs tam</SecoundCell>
           <SecoundCell>COs tam</SecoundCell>
            <Cell>Low Carb</Cell>
            <Cell>emotka</Cell>






        </Wrapper>
    )
}




export default FoodColumn