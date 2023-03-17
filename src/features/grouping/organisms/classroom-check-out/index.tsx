import {
    Accordion,
    Divider,
    Stack,
    Text as MantineText,
    useMantineTheme,
} from "@mantine/core";

import Text from "../../molecules/text";
import TextInput from "../../molecules/text-input";

export interface CheckoutProps {
    coupon?: string;
    sale?: number;
    price?: number;
    payment?: "Bank" | "Zalo" | "Momo";
}

export default function Checkout({ coupon, sale, price }: CheckoutProps) {
    const theme = useMantineTheme();
    return (
        <>
            <Accordion.Control>
                <Divider
                    label={
                        <MantineText
                            color={theme.primaryColor}
                            weight="bold"
                            size="md"
                        >
                            Thông tin thanh toán
                        </MantineText>
                    }
                />
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    {typeof coupon === "string" ? (
                        <TextInput
                            label="Mã giảm giá"
                            placeholder="Mã giảm giá"
                        />
                    ) : null}
                    {price ? (
                        <Text
                            label="Tạm tính"
                            value={
                                <>
                                    {price.toLocaleString("en-US")}{" "}
                                    <small>VND</small>
                                </>
                            }
                        />
                    ) : null}
                    {sale ? (
                        <Text
                            label="Giảm giá"
                            value={
                                <>
                                    {sale.toLocaleString("en-US")}{" "}
                                    <small>VND</small>
                                </>
                            }
                        />
                    ) : null}
                    {price && sale ? (
                        <Text
                            label="Tổng tiền"
                            value={
                                <>
                                    {(price - sale).toLocaleString("en-US")}{" "}
                                    <small>VND</small>
                                </>
                            }
                        />
                    ) : null}
                </Stack>
            </Accordion.Panel>
        </>
    );
}
