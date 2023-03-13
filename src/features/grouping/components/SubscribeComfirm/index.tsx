import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Center,
    Divider,
    Modal,
    Space,
    Stepper,
} from "@mantine/core";

import OrderDetail from "../../ui/templates/OrderDetail";

import { stepStyles, useStyles } from "./style";

import FormTitle from "~/features/authentication/components/FormTitle";

interface SubscribeComfirmProps {
    open: boolean;
    disabled: boolean;
    onClose: () => void;
}

const steps = ["Đăng ký", "Xác nhận", "Thanh toán"];

export default function SubscribeComfirm(props: SubscribeComfirmProps) {
    const { classes } = useStyles();
    const [active, setActive] = useState(1);
    const [timer, setTimer] = useState(15);

    const handleConfirm = () => setActive(2);

    useEffect(() => {
        setTimer(30);
        const interval = setInterval(
            () => setTimer((timer) => timer - 1),
            1000
        );
        return () => clearInterval(interval);
    }, [active]);

    useEffect(() => {
        setActive(1);
    }, [props.open]);

    return (
        <Modal
            withCloseButton={false}
            size={600}
            opened={props.open}
            onClose={props.onClose}
            exitTransitionDuration={300}
            centered
        >
            <Stepper styles={stepStyles} active={active} breakpoint="sm">
                {steps.map((step, index) => (
                    <Stepper.Step
                        key={step}
                        label={step}
                        className={
                            active === index ? classes.hightlight : undefined
                        }
                    ></Stepper.Step>
                ))}
            </Stepper>
            <Divider maw="80%" my="lg" mx="auto" />
            {active === 1 ? (
                <Box mah="70vh" style={{ overflow: "auto" }}>
                    <Center>
                        <FormTitle title="Xác nhận thông tin" />
                    </Center>
                    <OrderDetail />
                    <Button fullWidth my="md" onClick={handleConfirm}>
                        Xác nhận
                    </Button>
                </Box>
            ) : (
                <Box mah="70vh" style={{ overflow: "auto" }}>
                    <Center>
                        <FormTitle title="Thanh toán" />
                    </Center>
                    <Space h={500} />
                    <Button
                        loading={timer > 0}
                        disabled={timer > 0}
                        fullWidth
                        my="md"
                        onClick={props.onClose}
                    >
                        {timer > 0
                            ? `Vui lòng đọc kỹ thông tin ${timer}`
                            : "Xác nhận"}
                    </Button>
                    <Button
                        fullWidth
                        my="md"
                        onClick={props.onClose}
                        variant="subtle"
                    >
                        Thanh toán sau
                    </Button>
                </Box>
            )}
        </Modal>
    );
}
