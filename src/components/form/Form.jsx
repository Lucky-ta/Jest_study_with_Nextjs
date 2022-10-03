import React, { useState } from "react";
import * as FormComponents from "./index";
import * as InputComponents from "../Inputs/index";
import * as ButtonComponents from "../buttons/index";
import WarningValidation from "../warningValidation/warningValidation";

function Form() {
  const [formInputs, setFormInputs] = useState([]);

  const handleFormInputValues = ({ target }) => {
    setFormInputs({
      ...formInputs,
      [target.id]: target.value,
    });

    console.log(formInputs);
  };

  const isButtonActive = () => {
    if (!formInputs.name) return true;
    if (!formInputs.email) return true;
    if (!formInputs.password) return true;
    return false;
  };

  const handleButton = () => {
    console.log("Enviado!");
  };

  return (
    <FormComponents.FormContainer>
      <FormComponents.FormInputsContainer>
        <InputComponents.BasicInput
          onChange={(e) => handleFormInputValues(e)}
          type="text"
          id="name"
          placeholder="Nome"
        />
        {!formInputs.name && <WarningValidation fieldName="Name" />}

        <InputComponents.BasicInput
          onChange={(e) => handleFormInputValues(e)}
          type="text"
          id="email"
          placeholder="E-mail"
        />
        {!formInputs.email && <WarningValidation fieldName="E-mail" />}

        <InputComponents.BasicInput
          onChange={(e) => handleFormInputValues(e)}
          type="text"
          id="password"
          placeholder="Senha"
        />
        {!formInputs.password && <WarningValidation fieldName="Password" />}
      </FormComponents.FormInputsContainer>
      <ButtonComponents.BasicButton
        type="button"
        disabled={isButtonActive()}
        onClick={handleButton}
      >
        Entrar
      </ButtonComponents.BasicButton>
    </FormComponents.FormContainer>
  );
}

export default Form;
