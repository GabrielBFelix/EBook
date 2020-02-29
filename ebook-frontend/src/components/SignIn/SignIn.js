import React, { Component } from 'react';

import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';

import { FormContainer } from './SignInStyles';

import { masks } from '../../utils/masks';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',
            birthday: '',
            cpf: '',
            phone: '',
            errors: {
                name: [],
                password: [],
                email: [],
                birthday: [],
                cpf: [],
                phone: [],
            },
        };
    }

    handleChange = ({ target: input }) => {
        const possibleMasks = ['phone', 'cpf'];

        const valueMask = possibleMasks.includes(input.name) ? masks[input.name](input.value) : input.value;

        this.setState(
            {
                [input.name]: valueMask,
            },
            () => console.log(valueMask)
        );
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push('/')
    };
    render() {
        const { errors } = this.state;

        const { name, password, email, phone, cpf, birthday } = this.state;

        return (
            <FormContainer action="#" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    label="Name"
                    name="name"
                    id="name"
                    size="big"
                    value={name}
                    placeholder="Digite seu nome"
                    required
                    errors={errors['name']}
                    onChange={this.handleChange}
                ></Input>

                <Input
                    type="password"
                    value={password}
                    label="Password"
                    name="password"
                    id="password"
                    size="big"
                    errors={errors['password']}
                    placeholder="Digite sua senha"
                    required
                    onChange={this.handleChange}
                ></Input>

                <Input
                    type="email"
                    label="Email"
                    name="email"
                    value={email}
                    id="email"
                    errors={errors['email']}
                    size="big"
                    placeholder="Digite seu email"
                    required
                    onChange={this.handleChange}
                ></Input>

                <Input
                    type="phone"
                    label="Phone number"
                    name="phone"
                    value={phone}
                    id="phone"
                    errors={errors['phone']}
                    size="big"
                    placeholder="Digite seu Numero de Telefone"
                    required
                    onChange={this.handleChange}
                ></Input>

                <Input
                    type="text"
                    size="big"
                    label="CPF"
                    value={cpf}
                    name="cpf"
                    errors={errors['cpf']}
                    placeholder="Digite seu CPF"
                    id="cpf"
                    required
                    onChange={this.handleChange}
                ></Input>

                <Input
                    type="date"
                    size="big"
                    label="Data de Nascimento"
                    name="birthday"
                    id="birthday"
                    required
                    value={birthday}
                    errors={errors['birthday']}
                    onChange={this.handleChange}
                ></Input>

                <Button label="Enviar" type="submit"></Button>
            </FormContainer>
        );
    }
}

export default SignIn;
