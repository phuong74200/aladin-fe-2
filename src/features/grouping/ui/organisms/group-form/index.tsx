import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  Button,
  Flex,
  Group,
  Modal,
  Paper,
  ScrollArea,
  Stack,
  Stepper,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconHelpCircleFilled } from "@tabler/icons-react";
import dayjs from "dayjs";

import MomoQR from "@/assets/Momo.svg";

import Information from "../information";

import { GroupForm } from "./props";
import { accordionStyles, modalStyles, stepperStyles, useStyles } from "./style";

export default function GroupForm({ personal, checkout, group, opened, onClose, step }: GroupForm) {
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
            <Stepper.Step label="Step 1" description="Create an account" />
            <Stepper.Step label="Step 2" description="Verify email" />
            <Stepper.Step label="Step 3" description="Get full access" />
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
                  <Information label="Thông tin cá nhân">
                    <Information.Text label="Họ và tên" value={personal.name} />
                    <Information.Text label="Email" value={personal.email} />
                    <Information.Text label="Số điện thoại" value={personal.phone} />
                  </Information>
                </Accordion.Item>

                <Accordion.Item value="group">
                  <Information label="Thông tin nhóm">
                    <Information.Text label="ID nhóm ghép" value="HK22023G001" />
                    <Information.Text label="Môn đăng ký" value={group.subject} />
                    <Information.Text label="Số lượng sinh viên" value={group.lessons} />
                    <Information.Text label="Số lượng buổi học" value={group.lessons} />
                    {group.schedule.map((time, index) => (
                      <Information.Text
                        key={time.getTime()}
                        label={`Thời gian buổi ${index + 1}`}
                        value={dayjs(time).format("DD/MM/YYYY")}
                      />
                    ))}
                    <Information.Spoiler label="Nội dung buổi học" value={group.description} />
                    <Information.Text label="Tên TA phụ trách" value={group.ta.name} />
                  </Information>
                </Accordion.Item>

                <Accordion.Item value="check-out">
                  <Information label="Thông tin thanh toán">
                    <Information.Text label="Mã khuyến mãi" value={checkout.coupon} />
                    <Information.Currency label="Tạm tính" value={checkout.price} />
                    <Information.Currency label="Giảm giá" value={checkout.sale} />
                    <Information.Currency
                      label="Tổng tiền"
                      value={checkout.price - checkout.sale}
                    />
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
                  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Rhoncus entesque"
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
