import { Accordion, Stack, useMantineTheme } from "@mantine/core";

import DividerControl from "../../molecules/divider-control";
import NumberInput from "../../molecules/number-input";
import Radios from "../../molecules/radios";
import Select from "../../molecules/select";

export interface GroupInfoProps {
  subject?: string;
  students?: number;
  lessons?: number;
  duration?: number;
  description?: string;
  location?: string;
  schedule?: Date[];
  ta?: {
    name?: string;
  };
}

export default function GroupCreate({ subject }: GroupInfoProps) {
  const theme = useMantineTheme();

  return (
    <>
      <DividerControl textProps={{ color: theme.primaryColor }}>THÔNG TIN NHÓM</DividerControl>
      <Accordion.Panel>
        <Stack>
          <Select data={[]} placeholder="Môn đăng ký" label="Chọn môn học" value={subject} />
          <NumberInput label="số lượng" placeholder="Nhập số lượng sinh viên" value={undefined} />
          <NumberInput
            label="Số lượng buổi học"
            placeholder="Số lượng buổi học"
            value={undefined}
          />
          <Radios
            label="Thời lượng buổi học"
            data={[
              {
                label: "2 giờ",
                value: "2",
              },
              {
                label: "3 giờ",
                value: "3",
              },
              {
                label: "4 giờ",
                value: "4",
              },
            ]}
          />
          <Select
            data={[]}
            placeholder="Chọn nội dung cần giảng dạy"
            label="Nội dung buổi học"
            value={subject}
          />
        </Stack>
      </Accordion.Panel>
    </>
  );
}
