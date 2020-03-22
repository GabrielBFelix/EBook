import React from 'react';

import {HeaderContainer , NavContainer , Title, ListContainer, ListItem, StyledLink} from './HeaderStyles'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <HeaderContainer>
            <NavContainer>
                <Title><Link to='/' style={{padding : '2rem 5rem'}}>Logo</Link></Title>
                <ListContainer>
                    <ListItem>
                        <StyledLink to="/cart">Cart</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/signIn">Sign In</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/contact">Contact</StyledLink>
                    </ListItem>
                </ListContainer>
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
