import {
  Accordion,
  Button,
  Modal,
  Paper,
  rem,
  ScrollArea,
  Stack,
  Stepper,
  StepperProps,
} from "@mantine/core";

import Information from "../information";

import { accordionStyles, modalStyles, useStyles } from "./style";

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
}

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: "none",
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
      {...props}
    />
  );
}

export default function ClassRoomForm({ personal, checkout, group }: ClassRoomFormProps) {
  return (
    <Modal
      size="lg"
      opened={true}
      onClose={() => true}
      withCloseButton={false}
      styles={modalStyles}
    >
      <Stack>
        <Paper p="md">
          <StyledStepper active={0} onStepClick={() => true}>
            <Stepper.Step label="Step 1" description="Create an account" />
            <Stepper.Step label="Step 2" description="Verify email" />
            <Stepper.Step label="Step 3" description="Get full access" />
          </StyledStepper>
        </Paper>
        <Paper p="md">
          <ScrollArea h={700}>
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
                  </Information>
                </Accordion.Item>
              </Accordion>
              <Button>Đăng ký ngay</Button>
            </Stack>
          </ScrollArea>
        </Paper>
      </Stack>
    </Modal>
  );
}
