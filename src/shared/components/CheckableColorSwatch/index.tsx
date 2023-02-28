import { CheckIcon, ColorSwatch, ColorSwatchProps, Group } from "@mantine/core";

type CheckableColorSwatchProps = ColorSwatchProps & {
    checked?: boolean;
    onClick?: () => void;
};

export default function CheckableColorSwatch(props: CheckableColorSwatchProps) {
    const handleToggle = () => {
        if (typeof props.onClick === "function") props.onClick();
    };

    return (
        <Group position="center" spacing="xs">
            <ColorSwatch
                sx={{ color: "#fff", cursor: "pointer" }}
                {...props}
                onClick={handleToggle}
            >
                {props.checked && <CheckIcon width={10} />}
            </ColorSwatch>
        </Group>
    );
}
