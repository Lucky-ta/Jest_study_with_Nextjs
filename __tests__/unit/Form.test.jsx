import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Form from "../../src/components/form/Form";

describe('Test form component', () => {
    beforeEach(() => {
        render(<Form />);
    });

    it('must have a name input with placeholder called `Nome`', () => {
        const nameInput = screen.getByPlaceholderText('Nome');

        expect(nameInput).toBeInTheDocument();
    });
    it('must have a email input with placeholder called `E-mail`', () => {
        const emailInput = screen.getByPlaceholderText('E-mail');

        expect(emailInput).toBeInTheDocument();
    });
    it('must have a password input with placeholder called `Senha`', () => {
        const passwordInput = screen.getByPlaceholderText('Senha');

        expect(passwordInput).toBeInTheDocument();
    });
    it('must have a button with text `Entrar`', () => {
        const sendButton = screen.getByText('Entrar');

        expect(sendButton).toBeInTheDocument();
    });
});