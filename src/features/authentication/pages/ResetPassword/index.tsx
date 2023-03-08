import { useNavigate } from "react-router";
import { Box, Button, Image, Paper, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconLock, IconLockOpen } from "@tabler/icons";

import FormTitle from "../../components/FormTitle";

import { ASSET_DOUBLE_LOCK } from "~/constants/images";

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
        if (form.isValid()) {
            showNotification({
                id: "1",
                title: "Đổi lại mật khẩu thành công",
                message: (
                    <>
                        Bạn đã đổi mật khẩu thành công. Quay trở lại trang login
                        để đăng nhập bằng mật khẩu mới
                    </>
                ),
                color: "lime",
                icon: <IconLockOpen size={16} />,
                loading: false,
            });
            navigate("/login");
        }
    };

    return (
        <Box w="100%">
            <FormTitle title="Đặt lại mật khẩu" />
            <Paper shadow="xl" p="lg" w="100%">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Stack spacing="md">
                        <Image height="50%" src={ASSET_DOUBLE_LOCK} />
                        <PasswordInput
                            data-testid="input-password"
                            label="Mật khẩu mới"
                            placeholder="Mật khẩu mới"
                            icon={<IconLock size={16} />}
                            {...form.getInputProps("password")}
                        />
                        <PasswordInput
                            data-testid="input-re-password"
                            label="Nhập lại mật khẩu mới"
                            placeholder="Nhập lại mật khẩu mới"
                            icon={<IconLock size={16} />}
                            {...form.getInputProps("rePassword")}
                        />
                        <Button
                            data-testid="button-submit"
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
