import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TestEnv from "@/shared/components/TestEnv";

import Login from ".";

describe("Login Form", () => {
  it("should valid email", () => {
    const component = render(
      <TestEnv>
        <Login />
      </TestEnv>
    );

    const expected = "false";

    const submitNode = component.getByTestId("button-submit");
    const emailNode = component.getByTestId("input-email") as HTMLInputElement;

    const sut = "username@hotmail.com";

    fireEvent.change(emailNode, { target: { value: sut } });
    fireEvent.click(submitNode);

    expect(emailNode.getAttribute("aria-invalid")).toBe(expected);
  });
  it("should invalid email", () => {
    const component = render(
      <TestEnv>
        <Login />
      </TestEnv>
    );

    const expected = "true";

    const submitNode = component.getByTestId("button-submit");
    const emailNode = component.getByTestId("input-email") as HTMLInputElement;

    const sut = "ph%^&&*6%^&#$%_)unog^gtmail.com";

    fireEvent.change(emailNode, { target: { value: sut } });
    fireEvent.click(submitNode);

    expect(emailNode.getAttribute("aria-invalid")).toBe(expected);
  });
  it("shouldn't empty password", () => {
    const component = render(
      <TestEnv>
        <Login />
      </TestEnv>
    );

    const expected = "true";

    const submitNode = component.getByTestId("button-submit");
    const pwdNode = component.getByTestId("input-pwd") as HTMLInputElement;

    const sut = "";

    fireEvent.change(pwdNode, { target: { value: sut } });
    fireEvent.click(submitNode);

    expect(pwdNode.parentElement?.getAttribute("aria-invalid")).toBe(expected);
  });
});
