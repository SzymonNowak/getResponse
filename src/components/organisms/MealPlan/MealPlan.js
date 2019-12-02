import React from 'react';
import styled from 'styled-components';
import TimeColumn from '../../atoms/TimeColumn/TimeColumn';
import FoodColumn from '../../atoms/FoodColumn/FoodColumn';
import CheatDayColumn from '../../atoms/CheatDayColumn/CheatDayColumn';

    const Wrapper = styled.div`
    
    width:1000px;
    height:100px;
    display:flex;
    
    `;

const MealPlan = () => {
    return (
        <Wrapper>

        <TimeColumn/>
        <FoodColumn/>
        <FoodColumn/>
        <FoodColumn/>
        <FoodColumn/>
        <FoodColumn/>
        <FoodColumn/>
        <CheatDayColumn/>




        </Wrapper>
    )
}


export default MealPlan