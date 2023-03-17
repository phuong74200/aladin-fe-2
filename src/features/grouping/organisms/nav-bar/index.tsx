import { useMatch, useNavigate } from "react-router-dom";
import { Box, Button, Divider, Flex } from "@mantine/core";

import { divider, useStyles } from "./style";

export default function Navbar() {
    const { classes } = useStyles();

    const isMatchClassroom = useMatch("/student/class/*");
    const isMatchGrouping = useMatch("/student/grouping/*");
    const isMatchPersonal = useMatch("/student/personal/*");

    const navigate = useNavigate();

    const handleClick = (to: string) => () => {
        navigate(to);
    };

    return (
        <Flex w="100%" gap="md" align="center" justify="center">
            <Button
                size="md"
                fullWidth
                variant={isMatchGrouping ? "filled" : "subtle"}
                onClick={handleClick("/student/grouping")}
            >
                Nhóm ghép
            </Button>
            <Divider orientation="vertical" className={classes.divider} />
            <Button
                size="md"
                fullWidth
                variant={isMatchPersonal ? "filled" : "subtle"}
                onClick={handleClick("/student/personal")}
            >
                Nhóm riêng
            </Button>
            <Divider orientation="vertical" className={classes.divider} />
            <Button
                size="md"
                fullWidth
                variant={isMatchClassroom ? "filled" : "subtle"}
                onClick={handleClick("/student/class")}
            >
                Lớp học
            </Button>
        </Flex>
    );
}
