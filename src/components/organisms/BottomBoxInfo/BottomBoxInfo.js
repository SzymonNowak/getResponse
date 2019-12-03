import React from 'react';
import styled from 'styled-components';
import Box from '../../molecules/InfoBox/Box';

const Wrapper = styled.div`
    width:100%;
    height:200px;
    display:flex;
    justify-content:center;
    margin-top:30px;
    @media (max-width: 768px) {
      flex-direction:column;
      margin-top:400px;
      margin-left:120px;
  }
`;

const BottomBoxInfo = () => {
    return(
    
        <Wrapper>
          <Box/>
        </Wrapper>
       
    )
}


export default BottomBoxInfo;