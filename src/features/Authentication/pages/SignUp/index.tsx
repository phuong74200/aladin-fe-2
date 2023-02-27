import {
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    Paper,
    PasswordInput,
    Select,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconBrandGoogle, IconHash, IconLock } from "@tabler/icons";

import PasswordRequirement from "../../components/PasswordRequirement";

import { requirements } from "./requirements";

import AladinLogo from "~/shared/components/AladinLogo";

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
        <Box>
            <Stack spacing={0} mb="lg" ml="md">
                <AladinLogo>Chào mừng,</AladinLogo>
                <Text>Tạo tài khoản và bắt đầu học từ hôm nay</Text>
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
                            data={["React", "Angular", "Svelte", "Vue"]}
                            icon={<IconHash size={14} />}
                        />
                        <Flex justify="space-between" align="center">
                            <Checkbox
                                label="I agree to sell my privacy"
                                {...form.getInputProps("termsOfService", {
                                    type: "checkbox",
                                })}
                            />
                            <Text color="dimmed" size="sm">
                                Quên mật khẩu
                            </Text>
                        </Flex>
                        <Flex gap="md">
                            <Button fullWidth variant="outline">
                                Quay lại
                            </Button>
                            <Button fullWidth type="submit">
                                Tạo tài khoản
                            </Button>
                        </Flex>
                        <Divider label="Hoặc" labelPosition="center" />
                        <Button
                            leftIcon={<IconBrandGoogle size={16} />}
                            variant="light"
                            color="red"
                        >
                            Đăng nhập bằng Google
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}
