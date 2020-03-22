import styled  from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${(props) => props.inverted ?  'transparent' : '#174071'};
    color : ${(props) => props.inverted ?  '#000' : '#fff' };
    border: 1px solid #000;
    padding: 1rem 2rem;
    font-size: 1.5rem;
`;