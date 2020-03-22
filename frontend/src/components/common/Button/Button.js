import React from 'react';

import { StyledButton } from './ButtonStyles';
const Button = ({ children, ...otherProperties }) => {
    return <StyledButton {...otherProperties}>{children}</StyledButton>;
};

export default Button;
