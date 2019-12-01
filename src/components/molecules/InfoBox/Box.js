import React from 'react';
import styled from 'styled-components';
import rightArrow from '../../../assets/rightArrow.svg';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Header from '../../atoms/Header/Header';
const Wrapper = styled.div`

    width:400px;
    height: 100%;
    border-left: ${({ leftBorder }) => (leftBorder ? '1px solid #e1e1e1' : 'none')};

`;


const StyledButton = styled(Button)`

    margin-left:40px;
    margin-top: 20px;
`;

const StyledParagraph = styled(Paragraph)`
    margin-left:40px;
`;




const Box = () => {
    return (
        <>
            <Wrapper>
                    <Header>Rouning out of the  <br/> product?</Header>
                    <StyledParagraph>Loream ipsum dolor sit amet,conscet <br/>turadipiscing elit. Ineger aliquet</StyledParagraph>
                    <StyledButton>Buy now  <img alt="arrow" src={rightArrow}/> </StyledButton>
            </Wrapper>
            <Wrapper leftBorder>
                    <Header>Bod-e Trainer in  <br/> your pocket</Header>
                    <StyledParagraph>Loream ipsum dolor sit amet,conscet<br/> turadipiscing elit. Ineger aliquet</StyledParagraph>
                    <StyledButton><i  class="fab fa-apple" /> IOS   <img alt="arrow" src={rightArrow}/>  </StyledButton>
                    <StyledButton><i class="fab fa-android"></i> Android  <img alt="arrow" src={rightArrow}/> </StyledButton>
            </Wrapper>
            <Wrapper leftBorder>
                    <Header>Frequently Asked  <br/> Questions</Header>
                    <StyledParagraph>Loream ipsum dolor sit amet,conscet <br/>turadipiscing elit. Ineger aliquet</StyledParagraph>
                    <StyledButton>Read FAQs  <img alt="arrow" src={rightArrow}/> </StyledButton>
            </Wrapper>
        </>
    )
}

export default Box