import React from 'react';
import styled from 'styled-components';
import TimeColumn from '../../molecules/TimeColumn/TimeColumn';
import FoodColumn from '../../molecules/FoodColumn/FoodColumn';
import CheatDayColumn from '../../molecules/CheatDayColumn/CheatDayColumn';

    const Wrapper = styled.div`
    width:1400px;
    display:flex;
    `;
    
    const PositionWrapper = styled.div`
    
    width:100%;
    display:flex;
    justify-content:center;
    margin-left:120px;
    `;

const MealPlan = () => {

        
    return (
        <PositionWrapper>
            <Wrapper>
                <TimeColumn/>
                <FoodColumn Done activeDay/>
                <FoodColumn   />
                <FoodColumn/>
                <FoodColumn/>
                <FoodColumn/>
                <FoodColumn/>
                <CheatDayColumn/>
            </Wrapper>
        </PositionWrapper>
     
    )
}


export default MealPlan