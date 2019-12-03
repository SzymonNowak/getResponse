import React from 'react';
import styled from 'styled-components';
import Dot from '../../atoms/Dot/Dot';
import Line from '../../atoms/Line/Line';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
    display:flex;
    width:300px;
    height:30px;
    margin-left:110px;
    @media (max-width: 768px) {
      margin-left:150px;
  }

`;

const StyledParagraph = styled(Paragraph)`
text-transform:uppercase;
font-size:10px;
margin-bottom:10px;
margin-left: 110px;
color: ${({theme}) => theme.routGrey};
    @media (max-width: 768px) {
        margin-left:250px;
    }
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

const MainWrapper = styled.div`
@media (max-width: 768px) {
      margin-top:500px;
  }

`;

const DotBox = () => {
    return (
        <MainWrapper>
                   <StyledParagraph>your 14 week progress</StyledParagraph>
        <Wrapper>

            <StyledDot > 
            <WeekInfo>1</WeekInfo>
            </StyledDot>
            <Line/>


             <StyledDot>
            <WeekInfo>2</WeekInfo>
            </StyledDot>
            <Line />

             <StyledDot>
            <WeekInfo>3</WeekInfo>
            </StyledDot>
            <Line/>

             <StyledDot>
            <WeekInfo>4</WeekInfo>
            </StyledDot>
            <Line/>

             <StyledDot>
            <WeekInfo>5</WeekInfo>
            </StyledDot>
            <Line/>

             <StyledDot>
            <WeekInfo>6</WeekInfo>
            </StyledDot>
            <Line notActive/>

            <StyledDot>
            <WeekInfo>7</WeekInfo>
            </StyledDot>
            <Line notActive/>

            <StyledDot active>
            <WeekInfo>8</WeekInfo>
            </StyledDot>
            <Line notActive/>

            <StyledDot notActive>
            <WeekInfo>9</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>10</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>11</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>12</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>13</WeekInfo>
            </StyledDot>
            <Line notActive/>
            <StyledDot notActive>
            <WeekInfo>14</WeekInfo>
            </StyledDot>
        </Wrapper>
        </MainWrapper>
         
        
    )
}



export default DotBox