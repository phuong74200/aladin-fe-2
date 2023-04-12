import { Navigate } from "react-router-dom";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import LandingCarousel from "@/shared/components/LandingCarousel";

import { styles } from "./style";

export default function HomePage() {
  const theme = useMantineTheme();

  const isMatches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  if (isMatches) return <Navigate to="/login" />;

  return <LandingCarousel styles={styles} />;
}
