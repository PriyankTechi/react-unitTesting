import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a test", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //....nothing
 
    //Assert
    const element = screen.getByText("Hello World", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test('renders initial text', () => {
    render(<Greeting />);

    const initElement = screen.getByText("It's good to see you!");
    expect(initElement).toBeInTheDocument();
  });

  test('renders changed text on button click', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
 
    //Assert
    const element = screen.getByText("Changed!");
    expect(element).toBeInTheDocument();
  });

  test('does not renders on button click', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
 
    //Assert
    const element = screen.queryByText("It's good to see you!");
    expect(element).toBeNull();
  });
});
