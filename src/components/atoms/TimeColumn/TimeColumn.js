import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';


    const Wrapper = styled.div`
        width:110px;
        height:780px;
        display:flex;
        flex-direction:column;
        text-align: center;
        vertical-align: middle;
  
        background-color:#e3e3e3;

    `;

    const Cell = styled.div`
    border-bottom: ${({ bottomBorder }) => (bottomBorder ? '3px solid #dddddd' : 'none')};
    border-top: ${({ topBorder }) => (topBorder ? '3px solid #dddddd' : 'none')};
    height:60px;
    line-height: 60px;
    
    `;
    const SecoundCell = styled.div`
          line-height: 120px;
        border-bottom: ${({ bottomBorder }) => (bottomBorder ? '3px solid #dddddd' : 'none')};
        border-top: ${({ topBorder }) => (topBorder ? '3px solid #dddddde' : 'none')};

    height:120px;
    `;

    const StyledParagraph = styled(Paragraph)`
        margin-top:0;
    `;




const TimeColumn = () => {
    return (
        <Wrapper>
            <Cell> </Cell>
            
            <SecoundCell bottomBorder>
                <StyledParagraph>
                  <b>6:00</b>AM
                </StyledParagraph>
            </SecoundCell>
            
             <SecoundCell bottomBorder>
                <StyledParagraph>
                    <b>9:00</b>AM
                </StyledParagraph>
            </SecoundCell>
            
             <SecoundCell bottomBorder>
                <StyledParagraph>
                    <b>12:00</b>PM
                </StyledParagraph>
            </SecoundCell>
            
             <SecoundCell bottomBorder>
                <StyledParagraph >
                        <b>3:00</b>PM
                </StyledParagraph>
            </SecoundCell>
            
             <SecoundCell >
                
                <StyledParagraph>
                        <b>6:00</b>PM
                </StyledParagraph>
            </SecoundCell>
         
            <Cell></Cell>

            <Cell topBorder>
                  <StyledParagraph>
                        work
                </StyledParagraph>
            </Cell>





        </Wrapper>
    )
}




export default TimeColumn