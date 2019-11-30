import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import FoodTypeIcon from '../../atoms/FoodTypeIcon/FoodTypeIcon';
import Bread from '../../../assets/bread-slice-solid.svg'
import Egg from '../../../assets/egg-solid.svg'
import Fish from '../../../assets/fish-solid.svg'
import Hamburger from '../../../assets/hamburger-solid.svg'
import Pizza from '../../../assets/pizza-slice-solid.svg'

const Cos = styled.div`

 
`;

const Wrapper = styled.div`

    display:flex;
    width:300px;
    height:30px;

`;

const StyledParagraph = styled(Paragraph)`
    margin-top:5px;
    margin-left:15px;
    text-transform:uppercase;
    font-size:10px;



`;

const FoodChooseBox = () => {
    return (
        <Cos>
                <StyledParagraph>select your protein options</StyledParagraph>
            <Wrapper>
                <FoodTypeIcon icon={Bread}/>
                <FoodTypeIcon icon={Egg}/>
                <FoodTypeIcon icon={Fish}/>
                <FoodTypeIcon icon={Hamburger}/>
                <FoodTypeIcon icon={Pizza}/>

            </Wrapper>
        </Cos>
            
    
    )
}





export default FoodChooseBox;