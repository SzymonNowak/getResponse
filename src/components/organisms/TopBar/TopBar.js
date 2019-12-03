import React from 'react';
import styled from 'styled-components';
import DotBox from '../../molecules/DotBox/DotBox';
import FoodChooseBox from '../../molecules/FoodChooseBox/FoodChooseBox';
import WeekChanger from '../../molecules/WeekChanger/WeekChanger';

const BoxWrapper = styled.div`

    display:flex;
    width:1500px;
    height:100px;
    justify-content:space-around;
    @media (max-width: 768px) {
      flex-direction:column;
  }
`;

const MainWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    margin-top:32px;
    @media (max-width: 768px) {
      flex-direction:column;
  }
`;


const TopBar = ({weekCounter, click}) => {
    return (
        <MainWrapper>
            <BoxWrapper>
                <DotBox/>
                <WeekChanger weekCounter={weekCounter}   childClick={click}/> 
                <FoodChooseBox/> 
            </BoxWrapper>
        </MainWrapper>
       
    )
}


export default TopBar;