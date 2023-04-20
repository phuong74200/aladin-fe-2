import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  Tooltip,
} from "@mantine/core";
import { IconHelpCircleFilled } from "@tabler/icons-react";

import MomoQR from "@/assets/Momo.svg";

import Information from "../information";

import { ClassRoomFormProps } from "./props";
import { accordionStyles, modalStyles, stepperStyles, useStyles } from "./style";

export default function ClassRoomForm({
  personal,
  checkout,
  group,
  opened,
  onClose,
  step,
}: ClassRoomFormProps) {
  const id = useParams();
  const { classes } = useStyles();
  const [active, setActive] = useState(step);

  const handleStep = (step: number) => () => {
    setActive(step);
    if (step > 2) onClose();
  };

  useEffect(() => {
    return () => {
      setActive(step);
    };
  }, [id]);

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
            <Stepper.Step label="Step 1" description="Đăng ký" />
            <Stepper.Step label="Step 2" description="Xác nhận" />
            <Stepper.Step label="Step 3" description="Thanh toán" />
          </Stepper>
        </Paper>
        <Paper p="md" className={classes.paper} display={active === 1 ? "block" : "none"}>
          <ScrollArea h="100%">
            <Stack>
              <Accordion
                styles={accordionStyles}
                multiple
                radius="xl"
                defaultValue={["personal", "group", "check-out"]}
              >
                <Accordion.Item value="personal">
                  <Information label="THÔNG TIN CÁ NHÂN">
                    <Information.Text label="Họ và tên" value={personal.name} />
                    <Information.Text label="Email" value={personal.email} />
                    <Information.Text label="Số điện thoại" value={personal.phone} />
                  </Information>
                </Accordion.Item>
                <Accordion.Item value="group">
                  <Information label="THÔNG TIN NHÓM">
                    <Information.Text label="Môn học" value={group.subject} />
                    <Information.NumberInput
                      label="số lượng"
                      value={group.students}
                      placeholder="Nhập số lượng sinh viên"
                    />
                    <Information.Spoiler label="Nội dung" value={group.description} />
                    <Information.Spoiler label="Thời gian" value="19h-22h, 23/03/2023" />
                    <Tooltip label="Link buổi học sẽ được gửi qua mail sau khi bạn hoàn tất thanh toán.">
                      <Information.Text label="Địa điểm" value={group.location} />
                    </Tooltip>
                    <Information.Text label="TA phụ trách" value={group.ta.name} />
                  </Information>
                </Accordion.Item>
                <Accordion.Item value="check-out">
                  <Information label="THÔNG TIN THANH TOÁN">
                    <Information.Text label="Mã khuyến mãi" value="ALADIN123" />
                    <Information.Currency label="Tạm tính" value={checkout.price} />
                    <Information.Currency label="Giảm giá" value={checkout.sale} />
                    <Information.Currency
                      label="Tổng thanh toán"
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
              <Button mx={20} onClick={handleStep(2)}>
                Xác nhận
              </Button>
            </Stack>
          </ScrollArea>
        </Paper>
        <Paper p="lg" className={classes.paper} display={active >= 2 ? "block" : "none"}>
          <Stack justify="space-between" h="100%">
            <Flex align="center" justify="center" style={{ minHeight: 0, flexGrow: 1 }}>
              <img src={MomoQR} alt="momo" height="70%" />
            </Flex>
            <Stack align="center" w="100%">
              <Button w={300} onClick={handleStep(3)}>
                Xác nhận đã thanh toán
              </Button>
              <Group spacing={4} align="center">
                <Text variant="subtle">Thanh toán sau</Text>
                <Tooltip
                  label="Bạn sẽ hoàn thành thanh toán 24h trước buổi học đầu!"
                  position="bottom"
                  withArrow
                  withinPortal
                  multiline
                  width={300}
                >
                  <IconHelpCircleFilled />
                </Tooltip>
              </Group>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Modal>
  );
}
