import React from 'react';
import styled from 'styled-components';
import DotBox from '../../molecules/DotBox/DotBox';
import FoodChooseBox from '../../molecules/FoodChooseBox/FoodChooseBox';
import WeekChanger from '../../molecules/WeekChanger/WeekChanger';

const BoxWrapper = styled.div`

    display:flex;
    width:1200px;
    height:100px;
    justify-content:space-around;
`;

const MainWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:center;

`;


const TopBar = () => {
    return (
        <MainWrapper>
            <BoxWrapper>
                <DotBox/>
                <WeekChanger/> 
                <FoodChooseBox/> 
            </BoxWrapper>
        </MainWrapper>
       
    )
}


export default TopBar;