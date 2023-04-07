import RouteTransition from "../../components/RouteTransition";

import { LayoutProps } from "~/@types";

export default function TransitionLayout({ children }: LayoutProps) {
  return <RouteTransition>{children}</RouteTransition>;
}
