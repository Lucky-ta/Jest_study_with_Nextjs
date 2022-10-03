import Form from "../../src/components/form/Form";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Test form component interactions", () => {
  beforeEach(() => {
    render(<Form />);
  });

  it("must have a required field error message with empty inputs", () => {
    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");

    expect(nameInput).toHaveValue("");
    expect(emailInput).toBeEmptyDOMElement();
    expect(passwordInput).toBeEmptyDOMElement();

    const nameRequiredError = screen.getByText(/Name is required/i);
    const emailRequiredError = screen.getByText(/E-mail is required/i);
    const passwordRequiredError = screen.getByText(/Password is required/i);

    expect(nameRequiredError).toBeInTheDocument();
    expect(emailRequiredError).toBeInTheDocument();
    expect(passwordRequiredError).toBeInTheDocument();
  });

  it("required field error message should not be in the screen with valid input values", async () => {
    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");

    const nameRequiredError = screen.getByText(/Name is required/i);
    const emailRequiredError = screen.getByText(/E-mail is required/i);
    const passwordRequiredError = screen.getByText(/Password is required/i);

    expect(nameRequiredError).toBeInTheDocument();
    expect(emailRequiredError).toBeInTheDocument();
    expect(passwordRequiredError).toBeInTheDocument();

    await userEvent.type(nameInput, "Lucas");
    await userEvent.type(emailInput, "lucmaieski@gmail.com");
    await userEvent.type(passwordInput, "123456789");

    expect(nameRequiredError).not.toBeInTheDocument();
    expect(emailRequiredError).not.toBeInTheDocument();
    expect(passwordRequiredError).not.toBeInTheDocument();
  });

  it('Send form button must be disabled at start', () => {
    const sendFormButton = screen.getByRole('button');

    expect(sendFormButton).toBeInTheDocument();
    expect(sendFormButton.disabled).toBe(true);
  })
});
