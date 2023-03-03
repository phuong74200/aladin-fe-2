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
import { IconAt, IconLock } from "@tabler/icons";

import FormTitle from "../../components/FormTitle";

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
        <Box w="100%">
            <FormTitle
                title="Xin chào,"
                content="Đăng nhập và bắt đầu học ngay hôm nay!"
            />
            <Paper shadow="xl" p="lg" w="100%">
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
