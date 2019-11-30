import React from 'react';
import styled from 'styled-components';
import Dot from '../../atoms/Dot/Dot';
import Line from '../../atoms/Line/Line';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
    display:flex;
    width:300px;
    height:30px;
    
`;

const StyledParagraph = styled(Paragraph)`
text-transform:uppercase;
font-size:10px;
margin-bottom:10px;
color: ${({theme}) => theme.routGrey};
`;

const WeekInfo = styled.span`
      font-size:10px;
        font-weight:bold;
        color: #bebebe;
        position: absolute;
        top:10px;
        left:3px;
        margin-top:6px;
        display:block;

`;

const StyledDot = styled(Dot)`
    position:relative;
    background-color: ${({ notActive }) => (notActive ? '#dbdbdb' : '#b2c200')};

`;

const DotBox = () => {
    return (
        <div>
                   <StyledParagraph>your x week progress</StyledParagraph>
        <Wrapper>

            <StyledDot > 
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line/>


             <StyledDot>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line />

             <StyledDot>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line/>

             <StyledDot>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line/>

             <StyledDot>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line/>

             <StyledDot>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>

            <StyledDot>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>

            <StyledDot active>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>

            <StyledDot notActive>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>1</WeekInfo>
            </StyledDot>
        </Wrapper>
        </div>
         
        
    )
}



export default DotBox