import React from 'react';

import { StyledButton } from './ButtonStyles';

const Button = ({ label, ...properties }) => {
    return <StyledButton {...properties}>{label}</StyledButton>;
};

export default Button;
