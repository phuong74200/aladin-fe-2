import { useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Button, Flex, Paper, Stack, Text, Tooltip } from "@mantine/core";
import {
  IconBook2,
  IconCalendarTime,
  IconId,
  IconMapPin,
  IconNote,
  IconSchool,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react";

import ClassRoomForm from "../../organisms/classroom-form";
import Information from "../../organisms/information";
import { mock } from "../mock";

import { accordion, useStyles } from "./class-detail.style";

export default function ClassDetail() {
  const { classes, cx } = useStyles();
  const { id } = useParams();
  const [opened, setOpened] = useState(false);

  const { personal, checkout, group, step } = mock[parseInt(id || "0", 10)];

  const handleClose = () => setOpened(false);
  const handleOpen = () => setOpened(true);

  return (
    <Paper className={cx(classes.md__half_w, classes.overflow)} shadow="md" p="lg">
      <Stack>
        <Flex m={-4} h={36} justify="center" align="center">
          <Text className={classes.gradientText} weight={900} size={23}>
            ĐĂNG KÝ HỌC
          </Text>
        </Flex>
        <Accordion
          multiple
          radius="xl"
          defaultValue={["personal", "group", "check-out"]}
          styles={accordion}
        >
          {/* <Accordion.Item value="personal">
            <Information label="THÔNG TIN CÁ NHÂN">
              <Information.Text label="Họ và tên" value={personal.name} />
              <Information.Text label="Email" value={personal.email} />
              <Information.Text label="Số điện thoại" value={personal.phone} />
            </Information>
          </Accordion.Item> */}
          <Accordion.Item value="group">
            <Stack p={20}>
              <Information.Text label="ID lớp" value={group.id} icon={<IconId size={16} />} />
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
                <div>
                  <Information.Text
                    label="Địa điểm"
                    value={group.location}
                    icon={<IconMapPin size={16} />}
                  />
                </div>
              </Tooltip>
              <Information.Text
                label="Trợ giảng"
                value={group.ta.name}
                icon={<IconSchool size={16} />}
              />
            </Stack>
          </Accordion.Item>
          <Accordion.Item value="check-out">
            <Information label="THÔNG TIN THANH TOÁN">
              <Information.TextInput
                label="Mã khuyến mãi"
                justify="space-between"
                value={checkout.coupon}
                textInputProps={{
                  placeholder: "Nhập mã khuyến mãi",
                  sx: {
                    input: {
                      textAlign: "right",
                    },
                  },
                }}
                icon={<IconTicket size={16} />}
              />
              <Information.Currency label="Tạm tính" value={checkout.price} />
              <Information.Currency color="green" label="Giảm giá" value={-checkout.sale} />
              <Information.Currency
                color="rgba(255,0,0)"
                label="Tổng thanh toán"
                value={checkout.price - checkout.sale}
              />
            </Information>
          </Accordion.Item>
        </Accordion>
        <Button px="lg" mx={20} onClick={handleOpen}>
          Đăng ký ngay
        </Button>
      </Stack>
      <ClassRoomForm
        opened={opened}
        onClose={handleClose}
        personal={personal}
        checkout={checkout}
        group={group}
        step={step}
      />
    </Paper>
  );
}
