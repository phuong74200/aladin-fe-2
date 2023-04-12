import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TestEnv from "@/shared/components/TestEnv";

import PasswordRecovery from ".";

describe("Password Recovery Form", () => {
  it("should valid email", () => {
    const component = render(
      <TestEnv>
        <PasswordRecovery />
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
        <PasswordRecovery />
      </TestEnv>
    );

    const expected = "true";

    const submitNode = component.getByTestId("button-submit");
    const emailNode = component.getByTestId("input-email") as HTMLInputElement;

    const sut = "ph%^&&*6%^&#$%_)unoggtmail.com";

    fireEvent.change(emailNode, { target: { value: sut } });
    fireEvent.click(submitNode);

    expect(emailNode.getAttribute("aria-invalid")).toBe(expected);
  });
});
