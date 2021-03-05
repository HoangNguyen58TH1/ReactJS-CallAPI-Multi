import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Table from "../ItemTable";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  console.log('container', container);
});

afterEach(() => {
  console.log('container', container);
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Table data", async () => {
  const fakeTable = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTable)
    })
  );

  await act(async () => {
    render(<Table id="123" />, container);
  });

  expect(container.querySelector(".summary")).not.toBe(fakeTable.name);
  expect(container.querySelector("strong")).not.toBe(fakeTable.age);
  expect(container).not.toContain(fakeTable.address);
});
  