import React from 'react'
import Counter from '../Counter'
import { getByText, render, screen, fireEvent } from '@testing-library/react' 
import "@testing-library/jest-dom/extend-expect"


describe("test accessors", () => {
    beforeEach(() => render(<Counter />))

    test("test by id", () => {
        const button = screen.getByTestId("b1");
        expect(button.textContent).toBe("+");
    })

    test("test by id using screen", () => {
        const button = screen.getByTestId("b1");
        expect(button.textContent).toBe("+");
    })

    test("test by get text", () => {
        const button = screen.getByText("+")
        expect(button).toBeInTheDocument()
    })

    // there is no role called "input"
    test("test by role", () => {
        const button = screen.getAllByRole("button")
        expect(button.length).toBe(2);
    })
});

describe("check properties of html elements", () => {
    test("check properties of html elements", () => {
        // not used a screen here.
        const { getByText } = render(<Counter />)
        const input = getByText("+")
        console.log(input.hasChildNodes())
        console.log(input.id)
        console.log(input.tagName)
        console.log(input.textContent)
        console.log(input.length)
        console.log(input.value)
    });
})

describe("test events", () => {
    beforeEach(() => render(<Counter />))

    test("button event", () => {
        const plusButton = screen.getByText("+");
        fireEvent.click(plusButton)
        fireEvent.click(plusButton)
        // nested inside 2 div's
        const input = screen.getByText("2")
        expect(input.textContent).toBe("2")
    })

    test("input event", () => {
        const inputButton = screen.getByTestId("input");
        fireEvent.change(inputButton, {target : {value : 5}})
        expect(screen.getByTestId("input").value).toBe("5");
    })
})