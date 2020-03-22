import styled from 'styled-components';
import { Field } from 'formik';


export const InputGroup = styled.div`
    margin: 1rem 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    position: relative;
`;


export const StyledLabel = styled.label`
    font-size: 1rem;
`;


export const StyledInput = styled(Field)`
    outline: transparent;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    border-bottom: 1px solid #000;
    padding: 1rem 0;
`;

export const StyledErrorMessage = styled.p`
    background-color : #EA5252;
    padding: 1rem;
    font-size: 1.3rem;
    color : #fff;
`;
