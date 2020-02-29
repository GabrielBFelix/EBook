import React from 'react';

import { StyledInput, StyledLabel, InputContainer, StyledError } from './InputStyles';

const Input = ({errors, label,size , id, ...othersProperties }) => {

    console.log(errors)

    return (
        <InputContainer size={size}>

            <StyledInput id={id} {...othersProperties}></StyledInput>
            {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
            {errors.length > 0 ? errors.map((error) => (<StyledError>{error}</StyledError>)) : null}
        </InputContainer>
    );
};

export default Input;
