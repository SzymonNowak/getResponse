import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import FoodTypeIcon from '../../atoms/FoodTypeIcon/FoodTypeIcon';
import Food1 from '../../../assets/food1.png';
import Food2 from '../../../assets/food2.png';
import Food3 from '../../../assets/food3.png';
import Food4 from '../../../assets/food4.png';
import Food5 from '../../../assets/food5.png';
import Shape from '../../../assets/shape.png';

const Wrapper = styled.div`
    display:flex;
    width:300px;
    height:30px;
    position:relative;
    @media (max-width: 768px) {
      margin-left:150px;
  }
`;

const StyledParagraph = styled(Paragraph)`
    margin-top:5px;
    margin-left:15px;
    text-transform:uppercase;
    font-size:11px;
    @media (max-width: 768px) {
        margin-top:30px;
        margin-left:200px;
  }
`;

const StyledFoodTypeIcon = styled(FoodTypeIcon)`

    position:absolute;
    top:0px;
    left:170px;

`;

const FoodChooseBox = () => {
    return (
        <div>
        <StyledParagraph>select your protein options</StyledParagraph>
            <Wrapper>
                <FoodTypeIcon icon={Food1}/>
                <FoodTypeIcon icon={Food2}/>
                <FoodTypeIcon icon={Food3}/>
                <FoodTypeIcon icon={Food4}/>
                <FoodTypeIcon icon={Food5}/>
                <StyledFoodTypeIcon icon={Shape}/>
            </Wrapper>
        </div>
    )
}





export default FoodChooseBox;