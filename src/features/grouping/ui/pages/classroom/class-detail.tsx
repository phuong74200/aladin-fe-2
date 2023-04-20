import { useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Button, Paper, Stack, Tooltip } from "@mantine/core";

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
            <Information label="THÔNG TIN NHÓM">
              <Information.Text label="ID nhóm ghép" value={group.id} />
              <Information.Text label="Môn học" value={group.subject} />
              <Information.NumberInput
                label="số lượng"
                value={group.students}
                placeholder="Nhập số lượng sinh viên"
              />
              <Information.Spoiler label="Nội dung" value={group.description} />
              <Information.Spoiler label="Thời gian" value="19h-22h, 23/03/2023" />
              <Tooltip label="Link buổi học sẽ được gửi qua mail sau khi bạn hoàn tất thanh toán.">
                <div>
                  <Information.Text label="Địa điểm" value={group.location} />
                </div>
              </Tooltip>
              <Information.Text label="TA phụ trách" value={group.ta.name} />
            </Information>
          </Accordion.Item>
          <Accordion.Item value="check-out">
            <Information label="THÔNG TIN THANH TOÁN">
              <Information.TextInput
                label="Mã khuyến mãi"
                value={checkout.coupon}
                placeholder="Nhập mã khuyến mãi"
              />
              <Information.Currency label="Tạm tính" value={checkout.price} />
              <Information.Currency color="green" label="Giảm giá" value={-checkout.sale} />
              <Information.Currency
                color="red"
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
