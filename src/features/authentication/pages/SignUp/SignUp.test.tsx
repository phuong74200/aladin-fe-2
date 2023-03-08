import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ResetPassword from ".";

import TestEnv from "~/shared/components/TestEnv";

describe("PasswordReset Form", () => {
    it("should invalid email", () => {
        const component = render(
            <TestEnv>
                <ResetPassword />
            </TestEnv>
        );

        const expected = "true";

        const emailNode = component.getByTestId("input-email");
        const submitNode = component.getByTestId("button-submit");

        const sut = "www";

        fireEvent.change(emailNode, { target: { value: sut } });
        fireEvent.click(submitNode);

        expect(emailNode.getAttribute("aria-invalid")).toBe(expected);
    });
    it("should valid email", () => {
        const component = render(
            <TestEnv>
                <ResetPassword />
            </TestEnv>
        );

        const expected = "false";

        const emailNode = component.getByTestId("input-email");
        const submitNode = component.getByTestId("button-submit");

        const sut = "www@domain.net";

        fireEvent.change(emailNode, { target: { value: sut } });
        fireEvent.click(submitNode);

        expect(emailNode.getAttribute("aria-invalid")).toBe(expected);
    });
    it("should invalid. Unmatch password", () => {
        const component = render(
            <TestEnv>
                <ResetPassword />
            </TestEnv>
        );

        const expected = "true";

        const pwdNode = component.getByTestId("input-password");
        const repwdNode = component.getByTestId("input-re-password");
        const submitNode = component.getByTestId("button-submit");

        const sut1 = "v3rySt0ngP@ssword_1";
        const sut2 = "v3rySt0ngP@ssword_2";

        fireEvent.change(pwdNode, { target: { value: sut1 } });
        fireEvent.change(repwdNode, { target: { value: sut2 } });
        fireEvent.click(submitNode);

        expect(repwdNode.parentElement?.getAttribute("aria-invalid")).toBe(
            expected
        );
    });
    it("should valid. Matched password", () => {
        const component = render(
            <TestEnv>
                <ResetPassword />
            </TestEnv>
        );

        const expected = "false";

        const pwdNode = component.getByTestId("input-password");
        const repwdNode = component.getByTestId("input-re-password");
        const submitNode = component.getByTestId("button-submit");

        const sut1 = "v3rySt0ngP@ssword";
        const sut2 = "v3rySt0ngP@ssword";

        fireEvent.change(pwdNode, { target: { value: sut1 } });
        fireEvent.change(repwdNode, { target: { value: sut2 } });
        fireEvent.click(submitNode);

        expect(repwdNode.parentElement?.getAttribute("aria-invalid")).toBe(
            expected
        );
    });
    it("should invalid. Weak password", () => {
        const component = render(
            <TestEnv>
                <ResetPassword />
            </TestEnv>
        );

        const expected = "true";

        const pwdNode = component.getByTestId("input-password");
        const repwdNode = component.getByTestId("input-re-password");
        const submitNode = component.getByTestId("button-submit");

        const sut1 = "weakpassword";
        const sut2 = "weakpassword";

        fireEvent.change(pwdNode, { target: { value: sut1 } });
        fireEvent.change(repwdNode, { target: { value: sut2 } });
        fireEvent.click(submitNode);

        expect(pwdNode.parentElement?.getAttribute("aria-invalid")).toBe(
            expected
        );
    });
    it("should valid. Strong password", () => {
        const component = render(
            <TestEnv>
                <ResetPassword />
            </TestEnv>
        );

        const expected = "false";

        const pwdNode = component.getByTestId("input-password");
        const repwdNode = component.getByTestId("input-re-password");
        const submitNode = component.getByTestId("button-submit");

        const sut1 = "v3rySt0ngP@ssword";
        const sut2 = "v3rySt0ngP@ssword";

        fireEvent.change(pwdNode, { target: { value: sut1 } });
        fireEvent.change(repwdNode, { target: { value: sut2 } });
        fireEvent.click(submitNode);

        expect(pwdNode.parentElement?.getAttribute("aria-invalid")).toBe(
            expected
        );
    });
});
