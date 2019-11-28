import styled from 'styled-components';

const ButtonIcon = styled.button`

display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: transparent;
    background-image: url(${({icon}) => icon });
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    border: none;
`;


export default ButtonIcon;