import styled from 'styled-components';

const FoodTypeIcon = styled.div`
    width:60px;
    height:60px;
    background-image: url(${({icon}) => icon });
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 65%;
    color:green;
`;

export default FoodTypeIcon;