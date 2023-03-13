import {
    Accordion,
    Divider,
    Stack,
    Text,
    useMantineTheme,
} from "@mantine/core";

import Currency from "../../atoms/Currency";
import CouponInputGroup from "../../molecules/CouponInputGroup";
import InfoGroup from "../../molecules/InfoGroup";

export interface CheckoutAccordionProps {
    coupon?: string;
    sale?: number;
    price?: number;
}

export default function CheckoutAccordion({
    coupon,
    sale,
    price,
}: CheckoutAccordionProps) {
    const theme = useMantineTheme();

    return (
        <>
            <Accordion.Control>
                <Divider
                    label={
                        <Text
                            color={theme.primaryColor}
                            weight="bold"
                            size="md"
                        >
                            Thông tin thanh toán
                        </Text>
                    }
                />
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    {typeof coupon === "string" ? <CouponInputGroup /> : null}
                    {price ? (
                        <InfoGroup
                            label="Tạm tính"
                            value={
                                <>
                                    {price} <Currency />
                                </>
                            }
                        />
                    ) : null}
                    {sale ? (
                        <InfoGroup
                            label="Giảm giá"
                            value={
                                <>
                                    {sale} <Currency />
                                </>
                            }
                        />
                    ) : null}
                    {price && sale ? (
                        <InfoGroup
                            label="Tổng tiền"
                            value={
                                <>
                                    {price - sale} <Currency />
                                </>
                            }
                        />
                    ) : null}
                </Stack>
            </Accordion.Panel>
        </>
    );
}
