import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Paper, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";

import { ASSET_DOUBLE_LOCK } from "@/constants/images";

import FormTitle from "../../components/FormTitle";
import GoBackButton from "../../components/GoBackButton";

export default function PasswordRecovery() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      rememberMe: false,
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email không hợp lệ"),
    },
  });

  const handleOTP = () => navigate("./otp");

  return (
    <Box w="100%">
      <FormTitle title="Quên mật khẩu" content="Lấy lại mật khẩu" />
      <Paper shadow="xl" p="lg" w="100%">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack spacing="md">
            <Image height="50%" src={ASSET_DOUBLE_LOCK} />
            <TextInput
              data-testid="input-email"
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              description="Vui lòng nhập email của bạn để nhận mã xác thực"
              icon={<IconAt size={16} />}
              {...form.getInputProps("email")}
            />
            <Flex gap="md">
              <GoBackButton />

              <Button data-testid="button-submit" fullWidth type="submit" onClick={handleOTP}>
                Gửi mã xác thực
              </Button>
            </Flex>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
