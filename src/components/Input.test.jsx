import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from './Input';
import { fireEvent } from '@testing-library/react';

describe('App', () => {
    it('it should be rendered.', () => {
        render(<Input />);
        const textInput = screen.getByRole('textbox');
        expect(textInput).toBeInTheDocument();
    });

    it('it should be able to type.', () => {
        render(<Input />);
        const textInput = screen.getByRole('textbox');

        // Simulate user typing
        fireEvent.change(textInput, { target: { value: textInput.value } });

        // Verify the typed value
        expect(textInput.value).toBe(textInput.value);
    });

    it('it should render the label.', () => {
        render(<Input label="Test Label" />);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toBeInTheDocument();
    });

});