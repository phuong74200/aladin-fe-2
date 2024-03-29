import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  Paper,
  PasswordInput,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleLogin } from "@react-oauth/google";
import { IconAt, IconLock } from "@tabler/icons-react";

import { Validation } from "@/@types/Validation";
import { schools } from "@/constants/schools";
import { SelectItem } from "@/shared/components/SelectItem";

import FormTitle from "../../components/form-title";
import GoBackButton from "../../components/go-back-button";
import PasswordRequirement from "../../components/password-requirement";

import { requirements } from "./requirements";

const requirementTest = (validation: Validation[], value = "") => {
  for (const requirement of validation) {
    if (!requirement.re.test(value)) return false;
  }
  return true;
};

export default function SignUp() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
      password: "",
      rePassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email không hợp lệ"),
      rePassword: (value, values) => (value === values.password ? null : "Mật khẩu không khớp"),
      password: (value) => (requirementTest(requirements, value) ? null : "Mật khẩu quá yếu"),
    },
  });

  return (
    <Box miw={400}>
      <FormTitle title="Xin chào," content="Đăng ký và bắt đầu học ngay hôm nay!" />
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
            <PasswordRequirement
              data-testid="input-password"
              requirements={requirements}
              label="Mật khẩu"
              placeholder="Mật khẩu"
              icon={<IconLock size={16} />}
              {...form.getInputProps("password")}
            />
            <PasswordInput
              data-testid="input-re-password"
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
              icon={<IconLock size={16} />}
              {...form.getInputProps("rePassword")}
            />
            <Select
              label="Bạn đang học tại"
              placeholder="Nơi đang học"
              itemComponent={SelectItem}
              data={schools}
              searchable
              maxDropdownHeight={400}
              nothingFound="Nobody here"
              filter={(value, item) => item.tags.toLowerCase().includes(value.toLowerCase().trim())}
            />
            <Checkbox
              label="Tôi đồng ý với các điều khoản sử dụng"
              {...form.getInputProps("termsOfService", {
                type: "checkbox",
              })}
            />
            <Flex gap="md">
              <GoBackButton />
              <Button data-testid="button-submit" fullWidth type="submit">
                Tạo tài khoản
              </Button>
            </Flex>
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
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
