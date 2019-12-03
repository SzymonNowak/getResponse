import React, { Component } from 'react';
import styled from 'styled-components';
import TimeColumn from '../../molecules/TimeColumn/TimeColumn';
import FoodColumn from '../../molecules/FoodColumn/FoodColumn';
import CheatDayColumn from '../../molecules/CheatDayColumn/CheatDayColumn';

    const Wrapper = styled.div`
    width:1400px;
    display:flex;
    margin-left:0 !important;
       @media (max-width: 768px) {
      margin-top:400px;
      flex-wrap: wrap;
     } 
    `;
    
    const PositionWrapper = styled.div`
    
    width:100%;
    display:flex;
    justify-content:center;
    margin-left:120px;
     @media (max-width: 768px) {
    margin-left:55px;
     }
    `;

const MealCalendar = ({meals}) =>  {
         return (
                <PositionWrapper>
                    <Wrapper>
                        <TimeColumn/>
                        {meals.map(item => 
                            (   
                                <FoodColumn
                                    key={item.day}
                                    day={item.day}
                                    meals={item.meals}
                                    quantity={item.quantity}
                                    isDOne={item.isDOne}
                                    isToday={item.isToday}
                                    isGuiltFreeDay={item.isGuiltFreeDay}
                                />
                            ))
                        }
                         <CheatDayColumn/>
                    </Wrapper>
                </PositionWrapper>
                )
}


export default MealCalendar