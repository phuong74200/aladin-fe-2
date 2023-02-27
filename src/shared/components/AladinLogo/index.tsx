import { PropsWithChildren } from "react";
import { Title, TitleProps } from "@mantine/core";

import { useStyles } from "./style";

type AladinLogoProps = TitleProps & PropsWithChildren;

export default function AladinLogo(props: AladinLogoProps) {
    const { classes } = useStyles();

    return (
        <Title {...props} className={classes.gradientText}>
            {props.children ? props.children : "Aladin"}
        </Title>
    );
}
