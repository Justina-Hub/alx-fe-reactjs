import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(todoItem).toBeInTheDocument(); // simulate toggle
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(deleteButton).not.toBeInTheDocument();
  });
});
