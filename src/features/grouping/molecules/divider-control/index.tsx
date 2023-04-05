import {
    Accordion,
    AccordionControlProps,
    Divider,
    Text,
    TextProps,
} from "@mantine/core";

interface DividerControlProps extends AccordionControlProps {
    textProps?: TextProps;
    children?: React.ReactNode;
}

export default function DividerControl(props: DividerControlProps) {
    return (
        <Accordion.Control {...props}>
            <Divider
                label={
                    <Text weight="bold" size="md" {...props.textProps}>
                        {props.children}
                    </Text>
                }
            />
        </Accordion.Control>
    );
}
