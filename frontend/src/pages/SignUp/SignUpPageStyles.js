import styled from 'styled-components';

import { Form } from 'formik';

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 750px ) {
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        & > div:not(:last-child) {
            padding : 1rem 0;
            width: 40%;
        }

    }
`;


export const ButtonsContainer = styled.div`
    padding: 1rem 0;
    width: 70%;
    display: flex;
    justify-content: space-evenly;
`;
