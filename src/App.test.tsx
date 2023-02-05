/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import React from 'react';


describe("App", () => {
    it("should display a random color code", () => {
        render(<App />);
        const colorCode = screen.getByText(/#/);
        expect(colorCode).toBeInTheDocument();
    });

    it("should display 3 colored boxes", () => {
        render(<App />);
        const boxes = screen.getAllByTestId("color-container");
        expect(boxes[0].children.length).toEqual(3);
    });

    it("should display a message if the user selects the correct color", () => {
        render(<App />);
        const correctColor = screen.getAllByTestId("correct-color")[0];
        fireEvent.click(correctColor);
        const message = screen.getByText(/Correct!/);
        expect(message).toBeInTheDocument();
    });

    it("should display a message if the user selects the incorrect color", () => {
        render(<App />);
        const incorrectColor = screen.getAllByTestId("incorrect-color")[0];
        fireEvent.click(incorrectColor);
        const message = screen.getByText(/Incorrect!/);
        expect(message).toBeInTheDocument();
    });

    it("should display the play again button conditionally", () => {
        render(<App />);
        expect(screen.queryByText(/Play Again/)).not.toBeInTheDocument();
        const correctColor = screen.getAllByTestId("correct-color")[0];
        fireEvent.click(correctColor);
        expect(screen.getByText(/Play Again/)).toBeInTheDocument();
    });

    it("should generate new correct box when the user clicks the play again button", () => {
        render(<App />);
        const correctColor = screen.getAllByTestId("correct-color")[0];
        const firstColor = correctColor.style.backgroundColor;
        fireEvent.click(correctColor);
        const button = screen.getByText(/Play Again/);
        fireEvent.click(button);
        const boxes = screen.getAllByTestId("color-container");
        expect(boxes[0].children.length).toEqual(3);
        const secondColor =
            screen.getAllByTestId("correct-color")[0].style.backgroundColor;
        expect(firstColor).not.toEqual(secondColor);
    });
});
