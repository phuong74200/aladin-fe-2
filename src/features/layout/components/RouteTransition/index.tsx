import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useStyles } from "./style";

interface RouteTransitionProps {
    children: (classes: string, onAnimationEnd: () => void) => JSX.Element;
}

function RouteTransition({ children }: RouteTransitionProps) {
    const { classes } = useStyles();

    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState(classes.fadeIn);

    useEffect(() => {
        if (
            location.pathname.split("/")[1] !==
            displayLocation.pathname.split("/")[1]
        )
            setTransistionStage(classes.fadeOut);
    }, [location, displayLocation]);

    const onAnimationEnd = () => {
        if (transitionStage === classes.fadeOut) {
            setTransistionStage(classes.fadeIn);
            setDisplayLocation(location);
        }
    };

    return children(transitionStage, onAnimationEnd);
}

export default RouteTransition;
