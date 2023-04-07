import { useState } from "react";
import { Box, PasswordInput, PasswordInputProps, Popover, Progress, Text } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";

import getStrength from "../../utils/getStrength";

import { Validation } from "~/@types/Validation";

function RequirementField({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

type PasswordRequirementProps = PasswordInputProps & {
  requirements: Validation[];
  value: string;
};

export default function PasswordRequirement({
  requirements,
  value,
  ...props
}: PasswordRequirementProps) {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const checks = requirements.map((requirement, index) => (
    <RequirementField key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value, requirements);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      width="target"
      transitionProps={{ transition: "pop" }}
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            {...props}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
        <RequirementField label="Bao gồm ít nhất 6 ký tự" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
