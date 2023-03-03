import { Navigate } from "react-router-dom";
import { useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { styles } from "./style";

import LandingCarousel from "~/shared/components/LandingCarousel";

export default function HomePage() {
    const { width } = useViewportSize();

    const theme = useMantineTheme();

    if (width >= theme.breakpoints.md) return <Navigate to="/login" />;

    return <LandingCarousel styles={styles} />;
}
