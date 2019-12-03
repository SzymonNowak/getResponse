import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Donee from '../../../assets/done.png';
import Fit from '../../../assets/fit.png';

    const Wrapper = styled.div`
        width:161px;
        height:750px;
        display:flex;
        flex-direction:column;
        border:${({ isToday }) => (isToday ? '1px solid #ff801a' : 'none')};
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
    const BiggerCell = styled.div`
        position:relative;
        border-bottom: ${({ bottomBorder }) => (bottomBorder ? '3px solid #dddddd' : 'none')};
        border-top: ${({ topBorder }) => (topBorder ? '3px solid #dddddd' : 'none')};
        border-right: ${({ rightBorder }) => (rightBorder ? '3px solid #dddddd' : 'none')};
        background-color:${({ greyBackground }) => (greyBackground ? '#e3e3e3' : 'white')};
        line-height: 20px;
        height:120px;
    `;

    const StyledParagraph = styled(Paragraph)`
        margin-top:10px;
        font-size:16px;
        color: #959595;
    `;

    const StyledHeader = styled(Paragraph)`
         margin-top:0px;
        font-size:30px;
        font-weight:bold;
        color: ${({ isToday }) => (isToday ? '#ff801a' : '#b2c200')};
    `;

    const DoneImg = styled.img`
    position:absolute;
    top:2px;
    left:85%;
    display:block;
    `;

    const SmallerCell = styled.div`
        height:45px;
        border-top: ${({ topBorder }) => (topBorder ? '1px solid #dddddd' : 'none')};
        border-left:1px solid #dddddd;
        border-right:1px solid #dddddd;

        background-color:#e3e3e3;
    `;

    const FitImg = styled.img`
        margin-top:15px;
    `;



const FoodColumn = ({Done,day,meals,quantity,isDOne,isToday,isGuiltFreeDay}) => {

    return (
        <Wrapper  isToday={isToday} >
           <Cell bottomBorder rightBorder >
               <StyledHeader Head isToday={isToday}>
                        DAY {day}
               </StyledHeader>
           </Cell>
           {meals.map(item => 
                            (   
                                <BiggerCell bottomBorder rightBorder key={item.id}>
                                    <StyledParagraph>
                                        {item.name}
                                        
                                    </StyledParagraph>
                                    {isDOne ? (<DoneImg src={Donee} /> ) : ( false) }   
                                </BiggerCell>
                            ))
             }
             
           <SmallerCell >
                <StyledParagraph>
                    {quantity}
                </StyledParagraph>
           </SmallerCell>

           <SmallerCell topBorder>
                <FitImg src={Fit} />
           </SmallerCell>
        </Wrapper>
    )
}




export default FoodColumn