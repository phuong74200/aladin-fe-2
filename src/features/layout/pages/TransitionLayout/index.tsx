import { LayoutProps } from "@/@types";

import RouteTransition from "../../components/RouteTransition";

export default function TransitionLayout({ children }: LayoutProps) {
  return <RouteTransition>{children}</RouteTransition>;
}
