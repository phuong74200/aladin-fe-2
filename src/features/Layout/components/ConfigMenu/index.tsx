import {
    ActionIcon,
    Affix,
    DefaultMantineColor,
    Flex,
    Group,
    Menu,
    Text,
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

    const handleScheme = () => {
        themeState.toggleColorScheme();
    };
    return (
        <Menu
            closeOnItemClick={false}
            shadow="md"
            width={200}
            position="top-end"
            transition="pop-bottom-right"
        >
            <Menu.Target>
                <Affix position={{ bottom: 20, right: 20 }}>
                    <Transition transition="slide-up" mounted={true}>
                        {(transitionStyles) => (
                            <ActionIcon
                                size="lg"
                                variant="filled"
                                radius="xl"
                                style={transitionStyles}
                                color="primary"
                            >
                                <IconSettings2 size={16} />
                            </ActionIcon>
                        )}
                    </Transition>
                </Affix>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item onClick={handleScheme} icon={<SchemeToggle />}>
                    <Text>
                        {themeState.theme.colorScheme === "dark"
                            ? "Light mode"
                            : "Dark mode"}
                    </Text>
                </Menu.Item>
                <Menu.Label>Primary color</Menu.Label>
                <Menu.Item>
                    <Group position="apart">{swatches}</Group>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
