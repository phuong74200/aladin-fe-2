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
import { IconAt, IconBrandGoogle, IconLock } from "@tabler/icons";

import AladinLogo from "~/shared/components/AladinLogo";

export default function SignUp() {
    const form = useForm({
        initialValues: {
            email: "",
            rememberMe: false,
            password: "",
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Email không hợp lệ",
        },
    });

    return (
        <Box>
            <Stack spacing={0} mb="lg" ml="md">
                <AladinLogo>Chào mừng,</AladinLogo>
                <Text>Đăng nhập và bắt đầu học từ hôm nay</Text>
            </Stack>
            <Paper shadow="xl" p="lg" w={500}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Stack spacing="md">
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@email.com"
                            icon={<IconAt size={16} />}
                            {...form.getInputProps("email")}
                        />
                        <PasswordInput
                            label="Mật khẩu"
                            placeholder="Mật khẩu"
                            icon={<IconLock size={16} />}
                            {...form.getInputProps("password")}
                        />
                        <Flex justify="space-between" align="center">
                            <Checkbox
                                label="Ghi nhớ đăng nhập"
                                {...form.getInputProps("rememberMe", {
                                    type: "checkbox",
                                })}
                            />
                            <Link to="/password-recovery">
                                <Text color="dimmed" size="sm">
                                    Quên mật khẩu
                                </Text>
                            </Link>
                        </Flex>
                        <Button fullWidth type="submit">
                            Đăng nhập
                        </Button>
                        <Divider label="Hoặc" labelPosition="center" />
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log("Login Failed");
                            }}
                        />
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
