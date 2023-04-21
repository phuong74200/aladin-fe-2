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
  Tooltip,
} from "@mantine/core";
import {
  IconBook2,
  IconBuildingBank,
  IconCalendarTime,
  IconHelpCircleFilled,
  IconMapPin,
  IconNote,
  IconSchool,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react";

import MomoLogo from "@/assets/LogoMomo.svg";
import ZaloPay from "@/assets/LogoZalopay.svg";
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
  const [countdown, setCountdown] = useState(-1);

  const handleStep = (step: number) => () => {
    setActive(step);
    if (step == 2) setCountdown(15);
    if (step > 2) onClose();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
    return () => {
      setActive(step);
      setCountdown(15);
      clearInterval(interval);
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
                    <Information.Text
                      label="Môn học"
                      value={group.subject}
                      icon={<IconBook2 size={16} />}
                    />
                    <Information.NumberInput
                      label="Số lượng"
                      value={group.students}
                      placeholder="Nhập số lượng sinh viên"
                      icon={<IconUsers size={16} />}
                    />
                    <Information.Spoiler
                      label="Nội dung"
                      value={group.description}
                      icon={<IconNote size={16} />}
                    />
                    <Information.Spoiler
                      label="Thời gian"
                      value="19h-22h, 23/03/2023"
                      icon={<IconCalendarTime size={16} />}
                    />
                    <Tooltip label="Link buổi học sẽ được gửi qua mail sau khi bạn hoàn tất thanh toán.">
                      <Information.Text
                        label="Địa điểm"
                        value={group.location}
                        icon={<IconMapPin size={16} />}
                      />
                    </Tooltip>
                    <Information.Text
                      label="TA phụ trách"
                      value={group.ta.name}
                      icon={<IconSchool size={16} />}
                    />
                  </Information>
                </Accordion.Item>
                <Accordion.Item value="check-out">
                  <Information label="THÔNG TIN THANH TOÁN">
                    <Information.Text
                      label="Mã khuyến mãi"
                      value="ALADIN123"
                      rightTextProps={{ align: "right" }}
                      icon={<IconTicket size={16} />}
                    />
                    <Information.Currency label="Tạm tính" value={checkout.price} />
                    <Information.Currency label="Giảm giá" value={checkout.sale} />
                    <Information.Currency
                      label="Tổng thanh toán"
                      value={checkout.price - checkout.sale}
                    />
                    <Information.Radio
                      direction="column"
                      align="flex-end"
                      gap="sm"
                      label="Hình thức thanh toán:"
                    >
                      <Group>
                        <Radio value="zalo" label="Momo" />
                        <img alt="" src={MomoLogo} width={16} />
                      </Group>
                      <Group>
                        <Radio value="zalo" label="Zalo pay" />
                        <img alt="" src={ZaloPay} width={16} />
                      </Group>
                      <Group>
                        <Radio value="zalo" label="Ngân hàng" />
                        <IconBuildingBank size={16} />
                      </Group>
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
              <Button w={300} onClick={handleStep(3)} disabled={countdown > 0}>
                Xác nhận đã thanh toán {countdown > 0 && `${countdown}s`}
              </Button>
              <Group spacing={4} align="center">
                <Button
                  variant="subtle"
                  rightIcon={
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
                  }
                >
                  Thanh toán sau
                </Button>
              </Group>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Modal>
  );
}
