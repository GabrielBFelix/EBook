import React from 'react';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

import * as Yup from 'yup';

import { withFormik } from 'formik';

import { FormContainer, ButtonsContainer } from './SignUpPageStyles';

const SignUpPage = ({ values: { name, password, email, cpf, phone }, history }) => {
    return (
        <FormContainer>
            <Input type="text" value={name} name="name" label="Nome" id="name" required></Input>

            <Input type="email" value={email} name="email" label="Email" required id="email"></Input>
            <Input type="password" value={password} name="password" label="Senha" required id="password"></Input>
            <Input type="text" value={cpf} name="cpf" label="Cpf" required id="cpf"></Input>
            <Input type="phone" value={phone} name="phone" label="Número" required id="phone"></Input>

            <ButtonsContainer>
                <Button inverted="true" type="reset">
                    Resetar
                </Button>
                <Button type="submit">Cadastrar</Button>
            </ButtonsContainer>
        </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: (props) => ({
        name: '',
        password: '',
        email: '',
        cpf: '',
        phone: '',
    }),
    
    validationSchema: () => {
        return Yup.object({
            name: Yup.string().required(),
            password: Yup.string()
                .required()
                .min(7),
            email: Yup.string()
                .email()
                .required(),
            cpf: Yup.string()
                .required()
                .min(14),
            phone: Yup.string().required(),
        });
    },
})(SignUpPage);
