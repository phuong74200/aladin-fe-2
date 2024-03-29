import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  Paper,
  PasswordInput,
  Space,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleLogin } from "@react-oauth/google";
import { IconAt, IconLock } from "@tabler/icons-react";

import { VALID_EMAIL } from "@/shared/regex/email";

import FormTitle from "../../components/FormTitle";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      rememberMe: false,
      password: "",
    },
    validate: {
      email: (value) => (value.match(VALID_EMAIL) ? null : "Email không hợp lệ"),
      password: (value) => (value.length ? null : "Vui lòng nhập mật khẩu"),
    },
  });

  return (
    <Box w="100%">
      <FormTitle title="Xin chào," content="Đăng nhập và bắt đầu học ngay hôm nay!" />
      <Paper shadow="xl" p="lg" w="100%">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack spacing="md">
            <TextInput
              data-testid="input-email"
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              icon={<IconAt size={16} />}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              data-testid="input-pwd"
              label="Mật khẩu"
              placeholder="Mật khẩu"
              icon={<IconLock size={16} />}
              {...form.getInputProps("password")}
            />
            <Flex justify="space-between" align="center">
              <Checkbox
                data-testid="input-remember"
                label="Ghi nhớ đăng nhập"
                {...form.getInputProps("rememberMe", {
                  type: "checkbox",
                })}
              />
              <Link to="/password-recovery" data-testid="link-forgot">
                <Text color="dimmed" size="sm">
                  Quên mật khẩu
                </Text>
              </Link>
            </Flex>
            <Button fullWidth type="submit" data-testid="button-submit">
              Đăng nhập
            </Button>
            <Divider label="Hoặc" labelPosition="center" />
            <Center>
              <GoogleLogin
                shape="pill"
                locale="vi"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </Center>
            <Space h={16}></Space>
            <Center>
              <Text size="sm">
                Chưa có tài khoản?{" "}
                <Link to="/sign-up">
                  <b>Đăng ký</b>
                </Link>
              </Text>
            </Center>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
