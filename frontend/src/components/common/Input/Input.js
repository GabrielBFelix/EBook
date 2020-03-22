import React from 'react';

import { InputGroup, StyledInput, StyledLabel, StyledErrorMessage } from './InputStyles';

import { ErrorMessage } from 'formik'
const Input = ({id, name ,label, ...othersProperties}) => {
    return (
        <InputGroup>
            <StyledLabel htmlFor={id}>{label} :</StyledLabel>
            <StyledInput name={name} id={id} {...othersProperties} />
            <ErrorMessage name={name} component={StyledErrorMessage}></ErrorMessage>
        </InputGroup>
    );
};

export default Input;
