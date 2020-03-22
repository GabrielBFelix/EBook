import styled from 'styled-components';

import {Link} from 'react-router-dom'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 10vh;
`;

export const NavContainer = styled.nav`
    display: flex;
    height: 100%;
`;

export const Title = styled.h1`
    flex: 1.2;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    @media screen and (min-width: 800px) {
        justify-content: flex-start;
        padding-left: 20rem;
    }
`;

export const ListContainer = styled.ul`
    flex: 1.5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ListItem = styled.li``;

export const StyledLink = styled(Link)`
    &:link,
    &:visited {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #8C8029;
    }
`;

