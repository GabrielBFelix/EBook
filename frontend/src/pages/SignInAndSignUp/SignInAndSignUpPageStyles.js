import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width : 750px){
        flex-direction: row;
    }
`;

export const AsideContainer = styled.aside`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const StyledText = styled.p`
    font-size: 2.3rem;
    padding: 4rem 0;
    color : #8C8029;
    @media screen and (min-width: 750px;){
        
    }
`;