import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Paper, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";

import GoBackButton from "../../components/GoBackButton";

import { containerStyle, inputStyle } from "./style";

import { ASSET_DOUBLE_LOCK } from "~/constants/images";
import AladinLogo from "~/shared/components/AladinLogo";

const NUMB_DIGITS = 6;

export default function OTP() {
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

    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const interval = setInterval(
            () => setTimer((timer) => timer - 1),
            1000
        );
        return () => clearInterval(interval);
    }, []);

    const handleConfirm = () => navigate("/password-recovery/reset");
    return (
        <Box w="100%">
            <Stack spacing={0} mb="lg" ml="md">
                <AladinLogo>OTP</AladinLogo>
                <Text>Nhập mã 6 số nhận được từ email</Text>
            </Stack>
            <Paper shadow="xl" p="lg" w="100%">
                <Stack spacing="md">
                    <Image height="50%" src={ASSET_DOUBLE_LOCK} />
                    <Stack spacing={0} align="center">
                        <Text>
                            Vui lòng nhập mã {NUMB_DIGITS} số nhận được từ email
                        </Text>
                        <Text fw="bold">aladin@gmail.com</Text>
                    </Stack>
                    <form
                        onSubmit={form.onSubmit((values) =>
                            console.log(values)
                        )}
                    >
                        <OtpInput
                            inputStyle={inputStyle}
                            containerStyle={containerStyle}
                            numInputs={NUMB_DIGITS}
                            {...form.getInputProps("email")}
                        />
                    </form>
                    <Flex gap="md">
                        <GoBackButton />
                        <Button fullWidth type="submit" onClick={handleConfirm}>
                            Xác thực
                        </Button>
                    </Flex>
                    <Button variant="subtle" disabled={timer > 0}>
                        {timer > 0
                            ? `Gửi lại mã xác thực sau ${timer}s`
                            : "Gửi lại mã xác thực"}
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}
