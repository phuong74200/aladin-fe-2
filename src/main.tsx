import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import { browserRouter } from "./router";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <RouterProvider router={browserRouter} />
            </NotificationsProvider>
        </MantineProvider>
    </StrictMode>
);
