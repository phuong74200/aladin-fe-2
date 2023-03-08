import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ResetPassword from ".";

import TestEnv from "~/shared/components/TestEnv";

describe("PasswordReset Form", () => {
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

        const sut1 = "v3rySt0ngP4ssword_1";
        const sut2 = "v3rySt0ngP4ssword_2";

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

        const sut1 = "v3rySt0ngP4ssword";
        const sut2 = "v3rySt0ngP4ssword";

        fireEvent.change(pwdNode, { target: { value: sut1 } });
        fireEvent.change(repwdNode, { target: { value: sut2 } });
        fireEvent.click(submitNode);

        expect(repwdNode.parentElement?.getAttribute("aria-invalid")).toBe(
            expected
        );
    });
});
