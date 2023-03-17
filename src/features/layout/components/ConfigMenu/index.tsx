import {
    ActionIcon,
    Affix,
    DefaultMantineColor,
    Group,
    Popover,
    Stack,
    Transition,
    useMantineTheme,
} from "@mantine/core";
import { IconSettings2 } from "@tabler/icons";

import CheckableColorSwatch from "~/shared/components/CheckableColorSwatch";
import SchemeToggle from "~/shared/components/SchemeToggle";
import { useThemeStore } from "~/shared/store/themeStore";

export default function ConfigMenu() {
    const theme = useMantineTheme();

    const themeState = useThemeStore();

    const handleClick = (color: DefaultMantineColor) => () => {
        themeState.setPrimaryColor(color);
    };

    const swatches = Object.keys(theme.colors).map((color) => (
        <CheckableColorSwatch
            key={color}
            color={theme.colors[color][6]}
            checked={themeState.theme.primaryColor === color}
            onClick={handleClick(color)}
        />
    ));

    return (
        <Popover
            shadow="md"
            width={200}
            position="top-end"
            transition="pop-bottom-right"
        >
            <Popover.Target>
                <Affix position={{ bottom: 24 + 8, right: 24 + 8 }}>
                    <Transition transition="slide-up" mounted={true}>
                        {(transitionStyles) => (
                            <ActionIcon
                                size="lg"
                                variant="filled"
                                style={transitionStyles}
                                color="primary"
                            >
                                <IconSettings2 size={16} />
                            </ActionIcon>
                        )}
                    </Transition>
                </Affix>
            </Popover.Target>
            <Popover.Dropdown>
                <Stack>
                    <SchemeToggle size={25} />
                    <Group position="apart">{swatches}</Group>
                </Stack>
            </Popover.Dropdown>
        </Popover>
    );
}
