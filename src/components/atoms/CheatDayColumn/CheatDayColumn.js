import React from 'react';
import styled from 'styled-components';



    const Wrapper = styled.div`
    /* margin-left:400px; */
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




const CheatDayColumn = () => {
    return (
        <Wrapper>
            <Cell>Day 70 </Cell>
            <SecoundCell></SecoundCell>
            <SecoundCell></SecoundCell>
            <SecoundCell></SecoundCell>
            <SecoundCell></SecoundCell>
            <SecoundCell></SecoundCell>
            <Cell></Cell>

            <Cell>PRINT</Cell>





        </Wrapper>
    )
}




export default CheatDayColumn