import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import OTP from ".";

import TestEnv from "~/shared/components/TestEnv";

describe("Password Recovery Form", () => {
  it("should re-send button enabled", () => {
    vi.useFakeTimers();

    const component = render(
      <TestEnv>
        <OTP />
      </TestEnv>
    );

    const expected = undefined;
    const reSendNode = component.getByTestId("button-re-send");

    act(() => {
      vi.advanceTimersByTime(60 * 1000);
    });

    expect(reSendNode.dataset.disabled).toBe(expected);

    vi.useRealTimers();
  });
  it("should re-send button disabled", () => {
    const component = render(
      <TestEnv>
        <OTP />
      </TestEnv>
    );

    const expected = "true";
    const reSendNode = component.getByTestId("button-re-send");

    expect(reSendNode.dataset.disabled).toBe(expected);
  });

  it("should confirm button disabled", () => {
    const component = render(
      <TestEnv>
        <OTP />
      </TestEnv>
    );

    const expected = "true";
    const confirmNode = component.getByTestId("button-confirm");

    expect(confirmNode.dataset.disabled).toBe(expected);
  });
  it("should confirm button enabled", async () => {
    const component = render(
      <TestEnv>
        <OTP />
      </TestEnv>
    );

    const expected = undefined;

    const confirmNode = component.getByTestId("button-confirm");

    const sut = "123456";

    for (let i = 0; i < sut.length; i++) {
      const otpNode = component.getByTestId(`input-otp-${i}`);
      fireEvent.focus(otpNode);
      fireEvent.change(otpNode, {
        target: { value: sut.charAt(i) },
      });
    }

    expect(confirmNode.dataset.disabled).toBe(expected);
  });
});
