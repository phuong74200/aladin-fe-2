import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Flex,
    Image,
    Paper,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt } from "@tabler/icons";

import GoBackButton from "../../components/GoBackButton";

import { ASSET_DOUBLE_LOCK } from "~/constants/images";
import AladinLogo from "~/shared/components/AladinLogo";

export default function PasswordRecovery() {
    const navigate = useNavigate();
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

    const handleOTP = () => navigate("./otp");

    return (
        <Box>
            <Stack spacing={0} mb="lg" ml="md">
                <AladinLogo>Quên mật khẩu</AladinLogo>
                <Text>Lấy lại mật khẩu</Text>
            </Stack>
            <Paper shadow="xl" p="lg" w={500}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Stack spacing="md">
                        <Image height="50%" src={ASSET_DOUBLE_LOCK} />
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@email.com"
                            description="Vui lòng nhập email của bạn để nhận mã xác thực"
                            icon={<IconAt size={16} />}
                            {...form.getInputProps("email")}
                        />
                        <Flex gap="md">
                            <GoBackButton />

                            <Button fullWidth type="submit" onClick={handleOTP}>
                                Gửi mã xác thực
                            </Button>
                        </Flex>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}
