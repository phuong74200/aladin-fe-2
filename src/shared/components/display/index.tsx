import { PropsWithChildren } from "react";

interface DisplayProps extends PropsWithChildren {
  mounted?: unknown;
}

export default function Display({ mounted = true, children }: DisplayProps) {
  return <>{mounted ? children : null}</>;
}
