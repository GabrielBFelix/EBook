import React from 'react';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

import * as Yup from 'yup';

import { withFormik } from 'formik';

import { FormContainer, ButtonsContainer } from './SignUpPageStyles';

const SignUpPage = ({ history }) => {
    return (
        <FormContainer>
            <Input type="text" name="name" label="Nome" id="name" required></Input>

            <Input type="email" name="email" label="Email" required id="email"></Input>
            <Input type="password" name="password" label="Senha" required id="password"></Input>
            <Input type="text" name="cpf" label="Cpf" required id="cpf"></Input>
            <Input type="phone" name="phone" label="Número" required id="phone"></Input>
            <Input type="date" name="birthday" label="Data de Nascimento" required id="birthday"></Input>
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
        birthday: '',
    }),

    validationSchema: Yup.object().shape({
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
        birthday: Yup.date()
            .max(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)
            .required(),
    }),

    handleSubmit: (values) => {
        console.log(values);
        //MAKE API REQUEST HERE

    }
})(SignUpPage);
