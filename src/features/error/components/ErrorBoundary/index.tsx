import { useRouteError } from "react-router-dom";
import { useRollbar } from "@rollbar/react";
import { LogArgument } from "rollbar";

import Error500 from "../../pages/Error500";

export default function ErrorBoundary() {
    const error = useRouteError();
    const rollbar = useRollbar();

    rollbar.error("Error 500 fallback", error as LogArgument);

    return <Error500 />;
}
