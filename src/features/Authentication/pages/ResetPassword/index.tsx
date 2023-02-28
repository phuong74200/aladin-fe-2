import { Box, Button, Image, Paper, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconLock } from "@tabler/icons";

import { ASSET_DOUBLE_LOCK } from "~/constants/images";
import AladinLogo from "~/shared/components/AladinLogo";

export default function ResetPassword() {
    const form = useForm({
        initialValues: {
            rePassword: "",
            password: "",
        },
        validate: {
            rePassword: (value, values) =>
                value === values.password ? null : "Mật khẩu không khớp",
        },
    });

    return (
        <Box>
            <Stack spacing={0} mb="lg" ml="md">
                <AladinLogo>Đặt lại mật khẩu</AladinLogo>
            </Stack>
            <Paper shadow="xl" p="lg" w={500}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Stack spacing="md">
                        <Image height="50%" src={ASSET_DOUBLE_LOCK} />
                        <PasswordInput
                            label="Mật khẩu mới"
                            placeholder="Mật khẩu mới"
                            icon={<IconLock size={16} />}
                            {...form.getInputProps("password")}
                        />
                        <PasswordInput
                            label="Nhập lại mật khẩu mới"
                            placeholder="Nhập lại mật khẩu mới"
                            icon={<IconLock size={16} />}
                            {...form.getInputProps("rePassword")}
                        />
                        <Button mt="sm" fullWidth type="submit">
                            Xác nhận
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}
