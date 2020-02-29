import React from 'react';

import { HeaderContainer, ButtonsContainer, StyledLink } from './HeaderStyles';

import {withRouter} from 'react-router-dom'

import Dropdown from '../Dropdown/Dropdown';

const Header = ({ history }) => {
    const items = [
        { url: '/signIn', name: 'signIn', id: 1 },
        { url: '/signUp', name: 'SignUp', id: 2 },
    ];

    return (
        <HeaderContainer>
            <StyledLink to="/">Home</StyledLink>

            <ButtonsContainer>
                <StyledLink to="/shop">Shop</StyledLink>
                {history.location.pathname.includes('sign') ? null : <Dropdown name="Entrar" items={items}></Dropdown>}
            </ButtonsContainer>
        </HeaderContainer>
    );
};

export default withRouter(Header);
