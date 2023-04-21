import { useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Button, Paper, Radio, Stack } from "@mantine/core";

import GroupForm from "../../organisms/group-form";
import Information from "../../organisms/information";
import { mock } from "../mock";

import { accordion, useStyles } from "./group-detail.style";

export default function CreateGroup() {
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
          <Accordion.Item value="personal">
            <Information label="THÔNG TIN CÁ NHÂN">
              <Information.Text label="Họ và tên" value={personal.name} />
              <Information.Text label="Email" value={personal.email} />
              <Information.Text label="Số điện thoại" value={personal.phone} />
            </Information>
          </Accordion.Item>

          <Accordion.Item value="group">
            <Information label="THÔNG TIN NHÓM">
              <Information.Select
                searchable
                filter={(value, item) =>
                  !!item.label?.toLowerCase().includes(value.toLowerCase().trim())
                }
                label="Môn học"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
                placeholder="Chọn môn học"
              />
              <Information.Select
                searchable
                filter={(value, item) =>
                  !!item.label?.toLowerCase().includes(value.toLowerCase().trim())
                }
                label="Số lượng"
                data={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                ]}
                placeholder="Chọn số lượng sinh viên"
              />
              <Information.NumberInput
                label="Số lượng buổi học"
                placeholder="Nhập số lượng buối học"
              />
              <Information.Radio gap="sm" label="Thời lượng 1 buổi">
                <Radio value="2" label="2 giờ" />
                <Radio value="3" label="3 giờ" />
                <Radio value="4" label="4 giờ" />
              </Information.Radio>
              <Information.Select
                label="Nội dung buổi học"
                data={[
                  { value: "1", label: "Midterm - Dành cho K21" },
                  { value: "2", label: "Midterm - Dành cho K20" },
                  { value: "3", label: "Midterm - Dành cho K19" },
                  { value: "4", label: "Midterm - Dành cho K18" },
                ]}
                placeholder="Chọn nội dung cần giảng dạy"
              />
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
        <Button onClick={handleOpen}>Đăng ký ngay</Button>
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
