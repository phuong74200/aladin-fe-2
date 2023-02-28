import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import { useAuthService } from "./features/authentication/services/authService";
import ConfigMenu from "./features/layout/components/ConfigMenu";
import { useThemeStore } from "./shared/store/themeStore";
import { browserRouter } from "./router";

function App() {
    const themeState = useThemeStore();

    const me = useAuthService((state) => state.me);

    const getAuth = useAuthService((state) => state.get);

    useEffect(() => {
        getAuth();
    }, []);

    useEffect(() => {
        console.log(me);
    }, [me]);

    console.log(themeState.theme.colorScheme);

    return (
        <ColorSchemeProvider
            colorScheme={themeState.theme.colorScheme || "light"}
            toggleColorScheme={themeState.toggleColorScheme}
        >
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={themeState.theme}
            >
                <ConfigMenu />
                <NotificationsProvider>
                    <RouterProvider router={browserRouter} />
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
