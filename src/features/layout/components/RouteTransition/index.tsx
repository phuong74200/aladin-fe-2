import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { useStyles } from "./style";

import { resolvedRoutes } from "~/router";

export type RouteTransitionProps = PropsWithChildren & {
    duration?: number;
};

function RouteTransition({ children, duration = 300 }: RouteTransitionProps) {
    const location = useLocation();
    const { nodeRef } =
        resolvedRoutes.find((route) => route.path === location.pathname) ?? {};
    const { classes } = useStyles({ duration });

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={duration}
                classNames={classes.anim}
                unmountOnExit
            >
                {children}
            </CSSTransition>
        </SwitchTransition>
    );
}

export default RouteTransition;
