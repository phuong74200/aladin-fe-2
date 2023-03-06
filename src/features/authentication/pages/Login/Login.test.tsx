import { isInputElement } from "react-router-dom/dist/dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Login from ".";

describe("Login Form", () => {
    it("should valid email correctly", async () => {
        const loginForm = render(<Login />);

        const email = loginForm.getByTestId("input-email");
        const pwd = loginForm.getByTestId("input-pwd");
        const remember = loginForm.getByTestId("input-remember");

        const expectedEmail = "user@gmail.com";
        const expectedPwd = "user@gmail.com";
        const expectedRemember = true;

        fireEvent.change(email, { target: { value: expectedEmail } });
        fireEvent.change(pwd, { target: { value: expectedPwd } });
        fireEvent.change(remember, { target: { value: expectedRemember } });

        if (isInputElement(email)) expect(email.value).toBe(expectedEmail);
    });
});
