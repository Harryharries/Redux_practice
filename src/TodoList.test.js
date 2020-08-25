import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TodoList></TodoList>,div)
})

it("render TodoList correctly", () => {
    const {getByTestId} = render(<TodoList></TodoList>);
    expect(getByTestId("button")).toHaveTextContent("add");
})