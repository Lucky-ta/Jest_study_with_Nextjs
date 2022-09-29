import React from "react";
import * as FormComponents from './index'
import * as InputComponents from '../Inputs/index'
import * as ButtonComponents from '../buttons/index'

function Form() {
    return(
        <FormComponents.FormContainer>
            <FormComponents.FormInputsContainer>
                <InputComponents.BasicInput type="text" placeholder="Nome" />
                <InputComponents.BasicInput type="text" placeholder="E-mail"/>
                <InputComponents.BasicInput type="text" placeholder="Senha"/>
            </FormComponents.FormInputsContainer>
            <ButtonComponents.BasicButton>Entrar</ButtonComponents.BasicButton>
        </FormComponents.FormContainer>
    )
}

export default Form;
