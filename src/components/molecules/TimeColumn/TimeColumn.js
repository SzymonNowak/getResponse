import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';


    const Wrapper = styled.div`
        width:110px;
        height:750px;
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
    
    const BiggerCell = styled.div`
          line-height: 120px;
        border-bottom: ${({ bottomBorder }) => (bottomBorder ? '3px solid #dddddd' : 'none')};
        border-top: ${({ topBorder }) => (topBorder ? '3px solid #dddddde' : 'none')};

    height:120px;
    `;

    const SmallerCell = styled.div`
        height:45px;
        border-top: ${({ topBorder }) => (topBorder ? '1px solid #dddddd' : 'none')};

    `;

    const StyledParagraph = styled(Paragraph)`
        margin-top:0;
    `;



const TimeColumn = () => {
    return (
        <Wrapper>
            <Cell> </Cell>
            
            <BiggerCell bottomBorder>
                <StyledParagraph>
                  <b>6:00</b> <span> AM</span>
                </StyledParagraph>
            </BiggerCell>
            
             <BiggerCell bottomBorder>
                <StyledParagraph>
                    <b>9:00</b> <span> AM</span>
                </StyledParagraph>
            </BiggerCell>
            
             <BiggerCell bottomBorder>
                <StyledParagraph>
                    <b>12:00</b> <span> PM</span>
                </StyledParagraph>
            </BiggerCell>
            
             <BiggerCell bottomBorder>
                <StyledParagraph >
                        <b>3:00</b> <span> PM</span>
                </StyledParagraph>
            </BiggerCell>
            
             <BiggerCell >
                
                <StyledParagraph>
                        <b>6:00</b> <span> PM</span>
                </StyledParagraph>
            </BiggerCell>
            <SmallerCell >

            </SmallerCell>
            <SmallerCell topBorder>
                <StyledParagraph>
                    Workout
                </StyledParagraph>
            </SmallerCell>
        </Wrapper>
    )
}




export default TimeColumn