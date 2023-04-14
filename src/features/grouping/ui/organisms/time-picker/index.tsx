/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { ActionIcon, Group, Stack, Text, Tooltip, useMantineTheme } from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconMinus, IconPlus } from "@tabler/icons-react";
import { v4 } from "uuid";

import { useStyles } from "./style";

const DAYS = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
const slots = [
  "08h - 11h",
  "09h - 12h",
  "10h - 13h",
  "13h - 14h",
  "14h - 15h",
  "15h - 16h",
  "16h - 17h",
];

export default function TimePicker() {
  const [time, setTime] = useState<boolean[][]>(
    new Array(slots.length).fill(null).map(() => new Array(DAYS.length).fill(false))
  );

  const { classes } = useStyles({ color: "gray" });

  const theme = useMantineTheme();

  const handleToggle = (slot: number, day: number) => () => {
    setTime((time) => {
      const newTime = [...time];
      newTime[slot][day] = !newTime[slot][day];
      return newTime;
    });
  };

  return (
    <Stack>
      <Group w="100%" position="center">
        <Group w={300} position="apart" align="center">
          <ActionIcon size="lg">
            <IconChevronLeft size="2rem" />
          </ActionIcon>
          <Stack spacing={0} align="center">
            <Text size="lg" weight="bold">
              Tuần 4
            </Text>
            <Text size="xs" color="dimmed" weight="bold">
              14/03/2023 - 21/03/2023
            </Text>
          </Stack>
          <ActionIcon size="lg">
            <IconChevronRight size="2rem" />
          </ActionIcon>
        </Group>
      </Group>
      <table className={classes.table}>
        <thead>
          <tr>
            <th></th>
            {DAYS.map((day) => (
              <th key={v4()}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, slotIndex) => (
            <tr key={slot}>
              <td>
                <Text align="left" color="dimmed">
                  {slot}
                </Text>
              </td>
              {DAYS.map((day, dayIndex) => (
                <Tooltip withinPortal withArrow label={`${day}, ${slot}`} key={day}>
                  <td
                    className={classes.timeSlot}
                    onClick={handleToggle(slotIndex, dayIndex)}
                    style={{
                      background: time[slotIndex][dayIndex] ? theme.colors.green[3] : undefined,
                    }}
                  >
                    <div className={classes.center}>
                      <ActionIcon>
                        {time[slotIndex][dayIndex] ? (
                          <IconMinus size="1.125rem" color={theme.colors.red[6]} />
                        ) : (
                          <IconPlus size="1.125rem" color={theme.colors.green[6]} />
                        )}
                      </ActionIcon>
                    </div>
                  </td>
                </Tooltip>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
}
