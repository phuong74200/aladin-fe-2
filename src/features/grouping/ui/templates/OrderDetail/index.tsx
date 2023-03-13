import { Accordion } from "@mantine/core";

import CheckoutAccordion, {
    CheckoutAccordionProps,
} from "../../organisms/CheckoutAccordion";
import GroupAccordion, {
    GroupAccordionProps,
} from "../../organisms/GroupAccordion";
import PersonalAccordion, {
    PersonalAccordionProps,
} from "../../organisms/PersonalAccordion";

interface OrderDetailProps {
    personnal: PersonalAccordionProps;
    group: GroupAccordionProps;
    checkout: CheckoutAccordionProps;
    disabled?: boolean;
}

export default function OrderDetail({
    personnal,
    group,
    checkout,
}: Partial<OrderDetailProps>) {
    return (
        <Accordion
            multiple
            radius="xl"
            defaultValue={["personal", "group", "check-out"]}
            styles={(theme) => ({
                item: {
                    borderBottom: "none",
                },
                content: {
                    paddingTop: theme.spacing.md,
                    paddingBottom: theme.spacing.md,
                },
            })}
        >
            <Accordion.Item value="personal">
                <PersonalAccordion {...personnal} />
            </Accordion.Item>
            <Accordion.Item value="group">
                <GroupAccordion {...group} />
            </Accordion.Item>
            <Accordion.Item value="check-out">
                <CheckoutAccordion {...checkout} />
            </Accordion.Item>
        </Accordion>
    );
}
