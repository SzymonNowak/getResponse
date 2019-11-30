import styled from 'styled-components';

const FoodTypeIcon = styled.div`
    width:60px;
    height:60px;
    /* margin-right: 10px; */
    background-image: url(${({icon}) => icon });
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    color:green;
`;

export default FoodTypeIcon;