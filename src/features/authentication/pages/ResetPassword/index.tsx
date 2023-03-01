import { useNavigate } from "react-router";
import { Box, Button, Image, Paper, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconLock, IconLockOpen } from "@tabler/icons";

import { ASSET_DOUBLE_LOCK } from "~/constants/images";
import AladinLogo from "~/shared/components/AladinLogo";

export default function ResetPassword() {
    const navigate = useNavigate();

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

    const handleConfirm = () => {
        showNotification({
            id: "1",
            autoClose: 3000,
            title: "Đổi lại mật khẩu thành công",
            message:
                "Bạn đã đổi mật khẩu thành công. Quay trở lại trang login để đăng nhập bằng mật khẩu mới",
            color: "lime",
            icon: <IconLockOpen size={16} />,
            className: "my-notification-class",
            loading: false,
        });
        navigate("/login");
    };

    return (
        <Box w="100%">
            <Stack spacing={0} mb="lg" ml="md">
                <AladinLogo>Đặt lại mật khẩu</AladinLogo>
            </Stack>
            <Paper shadow="xl" p="lg" w="100%">
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
                        <Button
                            mt="sm"
                            fullWidth
                            type="submit"
                            onClick={handleConfirm}
                        >
                            Xác nhận
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}
