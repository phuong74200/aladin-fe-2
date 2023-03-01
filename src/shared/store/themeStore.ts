import {
    ColorScheme,
    DefaultMantineColor,
    MantineThemeOverride,
} from "@mantine/core";
import { create } from "zustand";

interface ThemeState {
    setPrimaryColor: (color: DefaultMantineColor) => void;
    setColorScheme: (scheme: ColorScheme) => void;
    toggleColorScheme: (scheme?: ColorScheme) => void;
    theme: MantineThemeOverride;
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: {
        primaryColor: "blue",
        colorScheme: "light",
        fontFamily: "Inter, sans-serif",
        components: {
            Button: {
                defaultProps: {
                    radius: "lg",
                },
            },
            Input: {
                defaultProps: {
                    radius: "md",
                },
            },
            ActionIcon: {
                defaultProps: {
                    radius: "xl",
                },
            },
            Menu: {
                defaultProps: { radius: "lg" },
            },
            Carousel: {
                styles: (theme) => ({
                    viewport: {
                        borderRadius: theme.radius.lg,
                    },
                }),
            },
            Paper: {
                defaultProps: { radius: "lg" },
            },
            InputLabel: {
                defaultProps: { mb: 4 },
            },
        },
    },
    setPrimaryColor: (color: DefaultMantineColor) => {
        set((state) => ({
            theme: {
                ...state.theme,
                primaryColor: color,
            },
        }));
    },
    setColorScheme: (scheme: ColorScheme) => {
        set((theme) => ({
            theme: {
                ...theme,
                colorScheme: scheme,
            },
        }));
    },
    toggleColorScheme: (scheme?: ColorScheme) => {
        set((state) => ({
            theme: {
                ...state.theme,
                colorScheme:
                    scheme ||
                    (state.theme.colorScheme === "dark" ? "light" : "dark"),
            },
        }));
    },
    setTheme: (theme: MantineThemeOverride) => {
        set((state) => ({
            theme: {
                ...state.theme,
                ...theme,
            },
        }));
    },
}));
