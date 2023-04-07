import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { Title, TitleProps } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { useStyles } from "./style";

type AladinLogoProps = TitleProps & PropsWithChildren;

export default function AladinLogo(props: AladinLogoProps) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const { width } = useViewportSize();

  const handleClick = () => {
    if (width <= 1200) return navigate("/home");
    return navigate("/login");
  };

  return (
    <Title onClick={handleClick} {...props} className={classes.gradientText}>
      {props.children ? props.children : "Aladin"}
    </Title>
  );
}
