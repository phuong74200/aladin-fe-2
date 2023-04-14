import { Outlet, useNavigate } from "react-router-dom";
import { Accordion, Box, Button, Paper, Radio, Stack } from "@mantine/core";

import Information from "../../organisms/information";
import Navbar from "../../organisms/nav-bar";

import { accordion, useStyles } from "./style";

export default function Personal() {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();

  const handleMap = () => navigate("/student/personal/map");
  const handleTime = () => navigate("/student/personal/time-pick");

  return (
    <>
      <Paper pos="relative" shadow="md" p="md" w="100%">
        <Stack w="100%" h="100%" spacing="lg">
          <Navbar />
          <Box style={{ overflow: "auto", flexGrow: 1, minHeight: 0 }}>
            <Outlet />
          </Box>
        </Stack>
      </Paper>
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
                <Information.Text label="Họ và tên" value="Nguyễn Văn A" />
                <Information.Text label="Email" value="nguyenvana@gmail.com" />
                <Information.Text label="Số điện thoại" value="0123456789" />
              </Information>
            </Accordion.Item>

            <Accordion.Item value="group">
              <Information label="Thông tin nhóm">
                <Information.Select
                  label="Môn đăng ký"
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                  ]}
                  placeholder="Chọn môn học"
                />
                <Information.Select
                  label="Số lượng sinh viên"
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
                  onClick={handleTime}
                />
                <Information.Radio label="Thời lượng 1 buổi">
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
                <Information.TextInput
                  label="Địa điểm"
                  placeholder="Chọn địa điểm"
                  onClick={handleMap}
                />
                <Information.Radio>
                  <Radio value="online" label="Online" />
                  <Radio value="offline" label="Offline" />
                </Information.Radio>
                <Information.TextInput
                  label="Lưu ý cho TA"
                  placeholder="Nhập lưu ý cho TA nếu có"
                />
              </Information>
            </Accordion.Item>

            <Accordion.Item value="check-out">
              <Information label="Thông tin thanh toán">
                <Information.Text label="Mã khuyến mãi" value={100000} />
                <Information.Currency label="Tạm tính" value={30000} />
                <Information.Currency label="Giảm giá" value={12342} />
                <Information.Currency label="Tổng tiền" value={13123} />
              </Information>
            </Accordion.Item>
          </Accordion>
          <Button>Đăng ký ngay</Button>
        </Stack>
      </Paper>
    </>
  );
}
