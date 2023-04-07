import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  m_md_hidden: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: "none",
    },
  },
  form: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      maxWidth: 500,
      margin: "0 auto",
    },
  },
  lg_p_0: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      padding: "0 !important",
      paddingLeft: 0,
    },
  },
}));
