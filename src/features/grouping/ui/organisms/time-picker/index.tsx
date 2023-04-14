import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import { IconAdjustments, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { v4 } from "uuid";

import { useStyles } from "./style";

const DAYS_OF_WEEK = new Array(7).fill(null);

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
  const { classes } = useStyles();

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
        <tbody>
          <tr>
            <th></th>
            {DAYS.map((day) => (
              <th key={v4()}>{day}</th>
            ))}
          </tr>
          {DAYS_OF_WEEK.map((_, index) => (
            <tr key={v4()}>
              <th>
                <Text align="left" color="dimmed">
                  {slots[index]}
                </Text>
              </th>
              {DAYS.map(() => (
                <td key={v4()}>xx</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
}
