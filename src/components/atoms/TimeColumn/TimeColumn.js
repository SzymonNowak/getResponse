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




const TimeColumn = () => {
    return (
        <Wrapper>
            <Cell> </Cell>
            <SecoundCell>6AM</SecoundCell>
            <SecoundCell>9AM</SecoundCell>
            <SecoundCell>12PM</SecoundCell>
            <SecoundCell>3PM</SecoundCell>
            <SecoundCell>6PM</SecoundCell>
            <Cell></Cell>
            <Cell>Workout</Cell>





        </Wrapper>
    )
}




export default TimeColumn