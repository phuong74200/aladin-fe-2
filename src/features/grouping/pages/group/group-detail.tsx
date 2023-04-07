import { useParams } from "react-router-dom";
import { Accordion, Button, Paper, Stack } from "@mantine/core";
import dayjs from "dayjs";

import Information from "../../organisms/information";
import { mock } from "../classroom/mock";

import { accordion, useStyles } from "./style";

export default function GroupDetail() {
  const { classes, cx } = useStyles();

  const params = useParams();
  const id = parseInt(params.id || "0", 10);

  const { personal, checkout, group } = mock[id];

  return (
    <Paper className={cx(classes.md__half_w, classes.overflow)} shadow="md" p="lg">
      <Stack>
        <Accordion
          multiple
          radius="xl"
          defaultValue={["personal", "group", "check-out"]}
          styles={accordion}
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
              <Information.Text label="Môn đăng ký" value={group.subject} />
              <Information.NumberInput label="Số lượng sinh viên" value={group.students} />
              <Information.Text label="Số lượng buổi học" value={group.lessons} />
              <Information.Text label="Thời lượng buổi học" value={group.lessons} />
              <Information.Text label="Địa điểm" value={group.location} />
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
              <Information.Currency label="Tổng tiền" value={checkout.price - checkout.sale} />
            </Information>
          </Accordion.Item>
        </Accordion>
        <Button>Đăng ký ngay</Button>
      </Stack>
    </Paper>
  );
}
