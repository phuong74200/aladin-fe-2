import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Paper, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";

import { ASSET_DOUBLE_LOCK } from "@/constants/images";

import FormTitle from "../../components/form-title";
import GoBackButton from "../../components/go-back-button";

import { useStyles } from "./style";

const NUMB_DIGITS = 6;

export default function OTP() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      otp: "",
    },
  });

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => setTimer((timer) => timer - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConfirm = () => navigate("/v1/password-recovery/reset");

  return (
    <Box w={400}>
      <FormTitle title="OTP" />
      <Paper shadow="xl" p="lg" w="100%">
        <Stack spacing="md">
          <Image height="50%" src={ASSET_DOUBLE_LOCK} />
          <Stack spacing={0} align="center">
            <Text>Vui lòng nhập mã {NUMB_DIGITS} số nhận được từ email</Text>
            <Text fw="bold">aladin@gmail.com</Text>
          </Stack>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <OtpInput
              data-testid="input-otp"
              inputStyle={classes.input}
              containerStyle={classes.container}
              focusStyle={classes.focus}
              numInputs={NUMB_DIGITS}
              {...form.getInputProps("otp")}
            />
          </form>
          <Flex gap="md">
            <GoBackButton />
            <Button
              data-testid="button-confirm"
              disabled={form.values.otp.length !== NUMB_DIGITS}
              fullWidth
              type="submit"
              onClick={handleConfirm}
            >
              Xác thực
            </Button>
          </Flex>
          <Button data-testid="button-re-send" variant="subtle" disabled={timer > 0}>
            {timer > 0 ? `Gửi lại mã xác thực sau ${timer}s` : "Gửi lại mã xác thực"}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
