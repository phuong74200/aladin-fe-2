import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export default function GoBackButton() {
    const navigate = useNavigate();

    const handleClick = () => navigate(-1);

    return (
        <Button fullWidth variant="outline" onClick={handleClick}>
            Quay lại
        </Button>
    );
}
