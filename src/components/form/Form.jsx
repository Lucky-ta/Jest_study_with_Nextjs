import React, { useState } from "react";
import * as FormComponents from "./index";
import * as InputComponents from "../Inputs/index";
import * as ButtonComponents from "../buttons/index";
import WarningValidation from "../warningValidation/WarningValidation";
import SentFormMessage from "../sentFormMessage/SentFormMessage";
import { useRouter } from "next/router";

function Form() {
  const FORM_INITIAL_VALUE = { name: "", email: "", password: "" };
  const [formInputs, setFormInputs] = useState(FORM_INITIAL_VALUE);
  const [isValidForm, setIsValidForm] = useState(false);

  const router = useRouter();

  const handleFormInputValues = ({ target }) => {
    setFormInputs({
      ...formInputs,
      [target.id]: target.value,
    });
  };

  const isButtonActive = () => {
    const validFormArrayFields = ["name", "email", "password"];
    const validate = validFormArrayFields.some(
      (key) => formInputs[key].length === 0
    );

    if (validate) return true;
    return false;
  };

  const handleButton = () => {
    router.push('/home');
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
