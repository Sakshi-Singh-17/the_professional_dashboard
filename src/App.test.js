import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Card is displayed successfully", () => {
  render(<App />);

  const card = screen.getByTestId("card");

  expect(card).toBeInTheDocument();
});

test("Input accepts text successfully", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Enter your name");

  fireEvent.change(input, {
    target: { value: "Sakshi" }
  });

  expect(input.value).toBe("Sakshi");
});

test("Button is displayed successfully", () => {
  render(<App />);

  const button = screen.getByText("Click Me");

  expect(button).toBeInTheDocument();
});

test("Button works when clicked", () => {
  render(<App />);

  const button = screen.getByText("Click Me");

  fireEvent.click(button);

  expect(screen.getByText("Button clicked")).toBeInTheDocument();
});
