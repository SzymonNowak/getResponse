import React from 'react';
import styled from 'styled-components';
import rightArrow from '../../../assets/rightArrow.svg';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Header from '../../atoms/Header/Header';
import Ios from '../../../assets/ios.png';
import Android from '../../../assets/android.png';

const Wrapper = styled.div`
    width:420px;
    height: 220px;
    border-left: ${({ leftBorder }) => (leftBorder ? '1px solid #e1e1e1' : 'none')};
    padding-left:10px;
    padding-right:10px;
    @media (max-width: 768px) {
      flex-direction:column;
            border:none;
            margin-top:40px;
  }
`;

const StyledButton = styled(Button)`
    margin-left:30px;
    margin-top: 20px;
`;

const StyledParagraph = styled(Paragraph)`
    margin-left:30px;
    font-size:20px;
    letter-spacing:0.5px;
`;

const StyledHeader = styled(Header)`
    font-size:35px;
    margin-left:30px;
    margin-top:20px;
    letter-spacing:0.5px;
`;

const Box = () => {
    return (
        <>
            <Wrapper>
                    <StyledHeader>Rouning out of <br/> product?</StyledHeader>
                    <StyledParagraph>Loream ipsum dolor sit amet,conscet <br/>turadipiscing elit. Ineger aliquet</StyledParagraph>
                    <StyledButton>Buy now  <img alt="arrow" src={rightArrow}/> </StyledButton>
            </Wrapper>
            <Wrapper leftBorder>
                    <StyledHeader>Bod-e Trainer in  <br/> your pocket</StyledHeader>
                    <StyledParagraph>Loream ipsum dolor sit amet,conscet<br/> turadipiscing elit. Ineger aliquet</StyledParagraph>
                    <StyledButton> <img alt="arrow" src={Ios}/> <span>iOS</span>   <img alt="arrow" src={rightArrow}/>  </StyledButton>
                    <StyledButton> <img alt="arrow" src={Android}/> <span>Android</span>  <img alt="arrow" src={rightArrow}/> </StyledButton>
            </Wrapper>
            <Wrapper leftBorder>
                    <StyledHeader>Frequently Asked  <br/> Questions</StyledHeader>
                    <StyledParagraph>Loream ipsum dolor sit amet,conscet <br/>turadipiscing elit. Ineger aliquet</StyledParagraph>
                    <StyledButton>Read FAQs  <img alt="arrow" src={rightArrow}/> </StyledButton>
            </Wrapper>
        </>
    )
}

export default Box