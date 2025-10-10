// src/__tests__/TodoList.test.js
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  const sampleTodos = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Read a book", completed: true },
  ];

  it("renders todo items correctly", () => {
    render(<TodoList todos={sampleTodos} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Read a book")).toBeInTheDocument();
  });

  it("renders 'No tasks yet.' when there are no todos", () => {
    render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText("No tasks yet.")).toBeInTheDocument();
  });
});
