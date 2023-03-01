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
import { IconAt, IconLock } from "@tabler/icons";

import FormTitle from "../../components/FormTitle";
import GoBackButton from "../../components/GoBackButton";
import PasswordRequirement from "../../components/PasswordRequirement";

import { requirements } from "./requirements";

import { schools } from "~/constants/schools";
import { SelectItem } from "~/shared/components/SelectItem";

export default function SignUp() {
    const form = useForm({
        initialValues: {
            email: "",
            termsOfService: false,
            password: "",
            rePassword: "",
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Email không hợp lệ",
            rePassword: (value, values) =>
                value === values.password ? null : "Mật khẩu không khớp",
        },
    });

    return (
        <Box w="100%">
            <FormTitle
                title="Xin chào,"
                content="Đăng ký và bắt đầu học ngay hôm nay!"
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
                        <PasswordRequirement
                            requirements={requirements}
                            label="Mật khẩu"
                            placeholder="Mật khẩu"
                            icon={<IconLock size={16} />}
                            {...form.getInputProps("password")}
                        />
                        <PasswordInput
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
                            filter={(value, item) =>
                                item.tags
                                    .toLowerCase()
                                    .includes(value.toLowerCase().trim())
                            }
                        />
                        <Checkbox
                            label="Tôi đồng ý với các điều khoản sử dụng"
                            {...form.getInputProps("termsOfService", {
                                type: "checkbox",
                            })}
                        />
                        <Flex gap="md">
                            <GoBackButton />
                            <Button fullWidth type="submit">
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
