import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';
import { fireEvent } from "@testing-library/react";

describe('Button', () => {
    it('it should render the button.', () => {
        render(<Button />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('it should be clicked.', () => {
        render(<Button />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
    });

    it('it should be disabled.', () => {
        render(<Button disabled={true} />);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    });

    it('it should render the text inside the button correctly.', () => {
        render(<Button text="Click me" />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Click me");
    });

});