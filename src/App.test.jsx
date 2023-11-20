import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from "../src/App";
import { fireEvent } from "@testing-library/react";

describe('App', () => {
    it('it should render the App.', () => {
        render(<App />);
        const appContainer = screen.getByTestId("app-container");
        expect(appContainer).toBeInTheDocument();
    });

    it('it should enable the button if two textboxes were typed.', () => {
        render(<App />);
        const appContainer = screen.getByTestId("app-container");
        const usernameInput = screen.getByLabelText("Username");
        const passwordInput = screen.getByLabelText("Password");
        const loginButton = screen.getByText("Login");

        expect(appContainer).toBeInTheDocument();
        expect(loginButton).toBeDisabled();

        fireEvent.change(usernameInput, { target: { value: "example" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });

        expect(loginButton).toBeEnabled();
    });
});