import styled from "styled-components";

export const BasicButton = styled.button`
    border: none;
    border-radius: 4px;

    padding: 1em;

    width: 20em;
    cursor: pointer;
    font-weight: 600;

    &&:hover{
        color: white;
        background-color: black;
    }
`;
