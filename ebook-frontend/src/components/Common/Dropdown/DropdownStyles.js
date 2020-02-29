import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: #000;
    display: inline-block;
    padding: 1rem;
    width: 100%;
    @media screen (max-width: 435px) {
    }
`;


export const ShowDropdownSpan = styled.span`
    font-size:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DropdownContainer = styled.div`
    position: relative;
`;

export const DropdownList = styled.ul`
    position: absolute;
    z-index: 1;
`;