import { PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { GOOGLE_CLIENT_ID } from "~/constants/env";
import { useThemeStore } from "~/shared/store/themeStore";

export default function TestEnv({ children }: PropsWithChildren) {
    const themeState = useThemeStore();

    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <ColorSchemeProvider
                colorScheme={themeState.theme.colorScheme || "light"}
                toggleColorScheme={themeState.toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={themeState.theme}
                >
                    <NotificationsProvider>
                        <MemoryRouter>{children}</MemoryRouter>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </GoogleOAuthProvider>
    );
}
