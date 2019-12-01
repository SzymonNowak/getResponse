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
    height:50px;
    width:25px;
    &:hover {
        background-color:${({theme}) => theme.orange};
        border: ${({theme}) => theme.borders.orange};

    }

`;


const WeekChanger = () => {
    return (
        <Wrapper>
            <StyledButtonIcon icon={LeftArrow}/>
            <StyledParagraph>Week X</StyledParagraph>
            <StyledButtonIcon icon={RightArrow}/>
        </Wrapper>
    )
}




export default WeekChanger