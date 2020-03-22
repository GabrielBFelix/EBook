import React from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';

import { withFormik } from 'formik';

import {  FormContainer, ButtonsContainer } from './SignInStyles';


import * as Yup from 'yup';

const SignIn = ({ values: { email, password }, errors, touched }) => {
    return (
            <FormContainer>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    label="Email"
                    placeholder="Digite seu email..."
                    required
                />

                <Input
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    placeholder="Digite sua senha..."
                    required
                />

                <ButtonsContainer>
                    <Button type="submit">Entrar</Button>
                </ButtonsContainer>
            </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: () => {
        return {
            email: '',
            password: '',
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(7)
            .required(),
    }),
    handleSubmit: (values) => {
        console.log(values);
    },
})(SignIn);
