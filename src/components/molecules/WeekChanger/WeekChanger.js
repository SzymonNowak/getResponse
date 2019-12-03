import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import LeftArrow from   '../../../assets/leftArrow.svg';
import RightArrow from  '../../../assets/rightArrow.svg';
const Wrapper = styled.div`
    display:flex;
    width:400px;
    height:100px;
    justify-content:space-around;
    @media (max-width: 768px) {
      margin-left:100px;
      margin-top: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)`
 color: ${({theme}) => theme.orange};
 font-size:60px;
 margin-left:0px;
 margin-top:0px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
    margin-top:10px;
    border: 1px solid #bebebe;
    border-radius: 5px;
    height:54px;
    width:32px;
    transition: 0.5s;
    &:hover {
        background-color:${({theme}) => theme.orange};
        border: ${({theme}) => theme.borders.orange};

    }
`;


const WeekChanger = ({weekCounter, childClick}) => {


    return (
        <Wrapper>
            { weekCounter !== 1 ? ( <StyledButtonIcon  icon={LeftArrow} onClick={() => childClick(-1)} />) : (<p></p>)}
            <StyledParagraph>Week {weekCounter}</StyledParagraph>
            { weekCounter < 4 ? (<StyledButtonIcon icon={RightArrow} pole="1" name="dupa" onClick={() => childClick(1)} />) : (<p></p>)}
        </Wrapper>
    )
}




export default WeekChanger