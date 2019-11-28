import styled from 'styled-components';

const UserAvatar = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    border: 1px solid #e1e1e1;
    margin-right: 10px;
    box-shadow: 0px 0px 10px #e1e1e1;
    background-image: url(${({icon}) => icon });
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
`;

export default UserAvatar;