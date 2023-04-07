import { createStyles } from "@mantine/core";

import { RouteTransitionProps } from ".";

export const useStyles = createStyles((_, params: RouteTransitionProps) => ({
  anim: {
    position: "absolute",
    left: 15,
    right: 15,
    "&-enter": {
      opacity: 0,
      transform: "translate(-20px, 0)",
    },
    "&-enter-active": {
      opacity: 1,
      transform: "translate(0, 0)",
      transition: `opacity ${params.duration}ms, transform ${params.duration}ms ease-out`,
    },
    "&-exit": {
      opacity: 1,
      transform: "translate(0, 0)",
    },
    "&-exit-active": {
      opacity: 0,
      transform: "translate(20px, 0)",
      transition: `opacity ${params.duration}ms, transform ${params.duration}ms ease-out`,
    },
  },
}));
