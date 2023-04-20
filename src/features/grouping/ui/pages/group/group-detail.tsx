import { useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Button, Paper, Stack } from "@mantine/core";
import dayjs from "dayjs";

import GroupForm from "../../organisms/group-form";
import Information from "../../organisms/information";
import { mock } from "../mock";

import { accordion, useStyles } from "./group-detail.style";

export default function GroupDetail() {
  const { classes, cx } = useStyles();

  const params = useParams();
  const id = parseInt(params.id || "0", 10);

  const { personal, checkout, group, step } = mock[id];

  const [opened, setOpened] = useState(false);

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
              <Information.Text label="Môn đăng ký" value={group.subject} />
              <Information.Text label="số lượng" value={group.lessons} />
              <Information.Text label="Số lượng buổi học" value={group.lessons} />
              {group.schedule.map((time, index) => (
                <Information.Text
                  key={time.getTime()}
                  label={`Thời gian buổi ${index + 1}`}
                  value={dayjs(time).format("DD/MM/YYYY")}
                />
              ))}
              <Information.Spoiler label="Nội dung buổi học" value={group.description} />
              <Information.Text label="TA phụ trách" value={group.ta.name} />
            </Information>
          </Accordion.Item>

          <Accordion.Item value="check-out">
            <Information label="THÔNG TIN THANH TOÁN">
              <Information.Text label="Mã khuyến mãi" value={checkout.coupon} />
              <Information.Currency label="Tạm tính" value={checkout.price} />
              <Information.Currency label="Giảm giá" value={checkout.sale} />
              <Information.Currency
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
      <GroupForm
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
