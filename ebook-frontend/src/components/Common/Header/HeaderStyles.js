import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width : 435px) {
        flex-direction: row;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;

    @media screen and (max-width : 435px) {
        align-items: flex-start;
    }
    
`;

export const StyledLink = styled(Link)`
    font-size : 2rem;
    text-decoration:none;
    color: #000;
    display: inline-block;
    padding: 1rem;

    @media screen (max-width : 435px) {
    }
`;
