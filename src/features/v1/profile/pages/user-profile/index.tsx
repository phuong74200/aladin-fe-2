import { Divider, Input, Paper, Select, SimpleGrid, Stack, Title } from "@mantine/core";

import AvatarGroup from "../../components/avatar-group";

export default function UserProfile() {
  return (
    <Stack m="0 auto">
      <Paper p="lg">
        <Stack>
          <AvatarGroup />
          <Divider my="xl" />
          <Title order={2} color="blue">
            Thông tin cá nhân
          </Title>
          <SimpleGrid cols={2}>
            <Input.Wrapper withAsterisk label="Họ và tên">
              <Input />
            </Input.Wrapper>
            <Input.Wrapper withAsterisk label="Số điện thoại">
              <Input />
            </Input.Wrapper>
            <Select
              label="Giới tính"
              data={[
                {
                  value: "MALE",
                  label: "Nam",
                },
                {
                  value: "FEMALE",
                  label: "Nữ",
                },
              ]}
            ></Select>
            <Input.Wrapper withAsterisk label="Trường">
              <Input />
            </Input.Wrapper>
            <Input.Wrapper withAsterisk label="Email">
              <Input />
            </Input.Wrapper>
          </SimpleGrid>
        </Stack>
      </Paper>
      <Paper p="lg">
        <Stack>
          <Divider my="xl" />
          <Title order={2} color="blue">
            Đỗi mật khẩu
          </Title>
          <SimpleGrid cols={2}>
            <Input.Wrapper withAsterisk label="Mật khẩu hiện tại">
              <Input />
            </Input.Wrapper>
            <div></div>
            <Input.Wrapper withAsterisk label="Mật khẩu mới">
              <Input />
            </Input.Wrapper>
            <Input.Wrapper withAsterisk label="Nhập lại mật khẩu mới">
              <Input />
            </Input.Wrapper>
          </SimpleGrid>
        </Stack>
      </Paper>
    </Stack>
  );
}
