import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: grey;

    gap: 2em;
    padding: 1em;
    border-radius: 6px;
    cursor: pointer;
    &&:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const FormInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8em;
`;
