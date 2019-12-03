import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Print from '../../../assets/print.png';
import Happy from '../../../assets/Happy2.png';
    const Wrapper = styled.div`
        width:150px;
        height:750px;

        display:flex;
        flex-direction:column;
        border:${({ activeDay }) => (activeDay ? '1px solid #ff801a' : 'nonee')};
        text-align: center;
        vertical-align: middle;
    `;

   const Cell = styled.div`
   position:relative;
    border-bottom: ${({ bottomBorder }) => (bottomBorder ? '3px solid #dddddd' : 'none')};
        border-top: ${({ topBorder }) => (topBorder ? '3px solid #dddddd' : 'none')};
        border-right: ${({ rightBorder }) => (rightBorder ? '3px solid #dddddd' : 'none')};

        background-color:${({ greyBackground }) => (greyBackground ? '#e3e3e3' : 'white')};
    line-height: 60px;

    height:60px;
    `;
    const StyledParagraph = styled(Paragraph)`
        margin-top:0px;
        font-size:${({ Head }) => (Head ? '30px' : '16px')};
        font-weight:${({ Head }) => (Head ? 'bold' : 'none')};
        color: ${({ Head }) => (Head ? '#b2c200' : '#959595')};
        display:inline-block;
    
    `;
    const RotateText = styled.p`
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg); 
        -moz-transform: rotate(-90deg); 
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
        font-size: 30px;
        color:#959595;
        margin-top:200px;
        margin-bottom:100px;
        letter-spacing: 2px;

    `;

    const PrintImg = styled.img`
        margin-top:30px;
        margin-right:10px;
    `;

   const PrintCell = styled.div`
        height:100px;
        border-top: ${({ topBorder }) => (topBorder ? '1px solid #dddddd' : 'none')};
        border-left:1px solid #dddddd;
        border-right:1px solid #dddddd;
        background-color:#e3e3e3;
    `;

    const FreeSpace = styled.div`
        height:650px;
        background-color:white;
    `;


const CheatDayColumn = () => {
    return (
        <Wrapper >
           <Cell bottomBorder  >
               <StyledParagraph Head>
                        DAY 70
               </StyledParagraph>
           </Cell>
            <FreeSpace>
                <RotateText>
                    GUILT-FREE DAY
                </RotateText>
                <img src={Happy}/>
            </FreeSpace>
            <PrintCell>
                <PrintImg src={Print}/> <StyledParagraph>Print</StyledParagraph>
            </PrintCell>
        </Wrapper>
    )
}




export default CheatDayColumn