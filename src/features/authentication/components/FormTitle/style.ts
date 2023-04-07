import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  m_md_hidden: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: "none",
    },
  },
  gradientText: {
    background: theme.fn.linearGradient(133, "#041EA0", "#1078EC"),
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
