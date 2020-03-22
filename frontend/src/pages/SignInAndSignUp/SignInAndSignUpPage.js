import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import Button from '../../components/common/Button/Button';

import { Link } from 'react-router-dom';

import { PageContainer, AsideContainer, StyledText } from './SignInAndSignUpPageStyles';

const SignInAndSignUp = () => {
    return (
        <PageContainer>
            <SignIn></SignIn>
            <AsideContainer>
                <StyledText>Ainda não é cadastrado ?</StyledText>
                <Button to="/signUp" as={Link} inverted>
                    Cadastrar
                </Button>
            </AsideContainer>
        </PageContainer>
    );
};

export default SignInAndSignUp;
