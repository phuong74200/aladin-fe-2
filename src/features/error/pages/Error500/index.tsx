import { useNavigate } from "react-router-dom";
import { Button, Container, Group, Text, Title } from "@mantine/core";

import { useStyles } from "./styles";

export default function Error500() {
    const { classes } = useStyles();

    const navigate = useNavigate();

    const handleClick = () => navigate(".");

    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            All of our servers are busy
                        </Title>
                        <Text
                            size="lg"
                            align="center"
                            className={classes.description}
                        >
                            We cannot handle your request right now, please wait
                            for a couple of minutes and refresh the page. Our
                            team is already working on this issue.
                        </Text>
                        <Group position="center">
                            <Button variant="white" onClick={handleClick}>
                                Refresh the page
                            </Button>
                        </Group>
                    </div>
                </div>
            </Container>
        </div>
    );
}
