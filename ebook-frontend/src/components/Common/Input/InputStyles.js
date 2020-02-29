import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    display: inline-block;
    padding: 1rem;
    margin: 1rem;
    flex-wrap: wrap;
    width: ${(props) => (props.size === 'small' ? '25vw' : props.size === 'medium' ? '30vw' : '45vw')};

    @media screen and (max-width: 420px) {
        width : 95vw;
    }
`;

export const StyledInput = styled.input`
    display: block;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #000;
    font-size: 1.5rem;

    width: 100%;

    &:not(:placeholder-shown) + label {
        top: -10%;
        opacity: 1;
    }
`;

export const StyledLabel = styled.label`
    font-size: 2em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s;
    opacity: 0;
    width: 100%;
`;

export const StyledError = styled.span`
    font-size: 2em;
    display: block;
    background-color:#E14455;
    color: #FFF;
    padding : .3rem;
    border : none;
    border-radius: 5px;
    margin-top: 5px;
    width: 100%;
`;