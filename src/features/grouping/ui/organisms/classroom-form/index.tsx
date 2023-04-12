import { useState } from "react";
import {
  Accordion,
  Button,
  Flex,
  Group,
  Modal,
  Paper,
  Radio,
  ScrollArea,
  Stack,
  Stepper,
  Text,
} from "@mantine/core";
import { IconHelpCircleFilled } from "@tabler/icons-react";

import MomoQR from "@/assets/Momo.svg";

import Information from "../information";

import { accordionStyles, modalStyles, stepperStyles, useStyles } from "./style";

interface ClassRoomFormProps {
  personal: {
    name: string;
    phone: string;
    email: string;
  };
  checkout: {
    coupon: undefined;
    sale: number;
    price: number;
  };
  group: {
    subject: string;
    students: undefined;
    lessons: number;
    duration: number;
    description: string;
    location: string;
    schedule: Date[];
    ta: {
      name: string;
    };
  };
  opened: boolean;
  onClose: () => void;
  step: number;
}

export default function ClassRoomForm({
  personal,
  checkout,
  group,
  opened,
  onClose,
  step,
}: ClassRoomFormProps) {
  const { classes } = useStyles();
  const [active, setActive] = useState(step);

  console.log(MomoQR);

  return (
    <Modal
      size={800}
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      styles={modalStyles}
    >
      <Stack h="100%">
        <Paper p="md">
          <Stepper styles={stepperStyles} active={active}>
            <Stepper.Step label="Step 1" description="Create an account" />
            <Stepper.Step label="Step 2" description="Verify email" />
            <Stepper.Step label="Step 3" description="Get full access" />
          </Stepper>
        </Paper>
        <Paper p="md" className={classes.paper} display={step === 1 ? "block" : "none"}>
          <ScrollArea h="100%">
            <Stack>
              <Accordion
                styles={accordionStyles}
                multiple
                radius="xl"
                defaultValue={["personal", "group", "check-out"]}
              >
                <Accordion.Item value="personal">
                  <Information label="Thông tin cá nhân">
                    <Information.Text label="Họ và tên" value={personal.name} />
                    <Information.Text label="Email" value={personal.email} />
                    <Information.Text label="Số điện thoại" value={personal.phone} />
                  </Information>
                </Accordion.Item>
                <Accordion.Item value="group">
                  <Information label="Thông tin nhóm">
                    <Information.Text label="Môn học" value={group.subject} />
                    <Information.NumberInput
                      label="Số lượng sinh viên"
                      value={group.students}
                      placeholder="Nhập số lượng sinh viên"
                    />
                    <Information.Spoiler label="Nội dung" value={group.description} />
                    <Information.Spoiler label="Thời gian" value="19h-22h, 23/03/2023" />
                    <Information.Text label="Địa điểm" value={group.location} />
                    <Information.Text label="Tên TA phụ trách" value={group.ta.name} />
                  </Information>
                </Accordion.Item>
                <Accordion.Item value="check-out">
                  <Information label="Thông tin thanh toán">
                    <Information.TextInput
                      label="Mã khuyến mãi"
                      value={checkout.coupon}
                      placeholder="Nhập mã khuyến mãi"
                    />
                    <Information.Currency label="Tạm tính" value={checkout.price} />
                    <Information.Currency label="Giảm giá" value={checkout.sale} />
                    <Information.Currency
                      label="Tổng tiền"
                      value={checkout.price - checkout.sale}
                    />
                    <Information.Radio label="Thanh toán bằng:">
                      <Radio value="bank" label="Ngân hàng" />
                      <Radio value="zalo" label="Zalo pay" />
                      <Radio value="momo" label="Momo" />
                    </Information.Radio>
                  </Information>
                </Accordion.Item>
              </Accordion>
              <Button mx={20}>Xác nhận</Button>
            </Stack>
          </ScrollArea>
        </Paper>
        <Paper p="lg" className={classes.paper} display={step === 2 ? "block" : "none"}>
          <Stack justify="space-between" h="100%">
            <Flex align="center" justify="center" style={{ minHeight: 0, flexGrow: 1 }}>
              <img src={MomoQR} alt="momo" height="70%" />
            </Flex>
            <Stack align="center" w="100%">
              <Button w={300}>Xác nhận đã thanh toán</Button>
              <Group spacing="sm" align="center">
                <Text variant="subtle">Thanh toán sau</Text>
                <IconHelpCircleFilled />
              </Group>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Modal>
  );
}
