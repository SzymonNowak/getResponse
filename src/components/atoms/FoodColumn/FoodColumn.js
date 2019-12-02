import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';



    const Wrapper = styled.div`
        width:150px;
        height:1053px;
        display:flex;
        flex-direction:column;
        border:${({ activeDay }) => (activeDay ? '1px solid #ff801a' : 'nonee')};
        text-align: center;
        vertical-align: middle;
    `;

   const Cell = styled.div`
    border-bottom: ${({ bottomBorder }) => (bottomBorder ? '3px solid #dddddd' : 'none')};
        border-top: ${({ topBorder }) => (topBorder ? '3px solid #dddddd' : 'none')};
        border-right: ${({ rightBorder }) => (rightBorder ? '3px solid #dddddd' : 'none')};

        background-color:${({ greyBackground }) => (greyBackground ? '#e3e3e3' : 'white')};

    height:60px;
    `;
    const SecoundCell = styled.div`
        border-bottom: ${({ bottomBorder }) => (bottomBorder ? '3px solid #dddddd' : 'none')};
        border-top: ${({ topBorder }) => (topBorder ? '3px solid #dddddd' : 'none')};
        border-right: ${({ rightBorder }) => (rightBorder ? '3px solid #dddddd' : 'none')};
        background-color:${({ greyBackground }) => (greyBackground ? '#e3e3e3' : 'white')};


    height:120px;
    `;

    const StyledParagraph = styled(Paragraph)`
        margin-top:10px;
        font-size:${({ Head }) => (Head ? '25px' : '16px')};
        color: ${({ Head }) => (Head ? '#b2c200' : '#959595')};
    `;




const FoodColumn = () => {
    return (
        <Wrapper >
           <Cell bottomBorder rightBorder >
               <StyledParagraph Head>
                        DAY 64
               </StyledParagraph>
           </Cell>
           <SecoundCell bottomBorder rightBorder>
               <StyledParagraph>
                   Bode Shake
               </StyledParagraph>
           </SecoundCell>

           <SecoundCell bottomBorder rightBorder>
               <StyledParagraph>
                    Ham and Swiss Roll Ups
               </StyledParagraph>
           </SecoundCell>
           <SecoundCell bottomBorder rightBorder>
               <StyledParagraph>
                    Turkey Melt
               </StyledParagraph>
           </SecoundCell>

           <SecoundCell bottomBorder rightBorder>
               <StyledParagraph>
                    Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray
               </StyledParagraph>
           </SecoundCell>
           <SecoundCell bottomBorder rightBorder>
               <StyledParagraph>
                    Turkey Melt
               </StyledParagraph>
           </SecoundCell>
            <Cell greyBackground rightBorder>
                <StyledParagraph>
                    Low-Carb
                </StyledParagraph>
            </Cell>
            <Cell topBorder greyBackground rightBorder>
                <StyledParagraph>
                  emotka
                </StyledParagraph>
            </Cell>






        </Wrapper>
    )
}




export default FoodColumn