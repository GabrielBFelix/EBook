import styled from 'styled-components';

import { Form } from 'formik';



export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height : 80vh;
    margin: 2rem 0 0 0;
    flex: 1;
    border-right: 1px solid #000;
    @media screen and (min-width: 750px){
        width: 45vw;
    }
`;


export const ButtonsContainer = styled.div`
    margin-top: 3rem;
    width: 70%;
    display: flex;
    justify-content: space-evenly;
`;




