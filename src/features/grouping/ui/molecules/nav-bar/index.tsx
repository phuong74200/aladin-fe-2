import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, SegmentedControl } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

const getTabs = (children?: AuthRouteObject[]) => {
  return (children || []).map((child) => ({
    key: child.path || uuidv4(),
    value: child.path || uuidv4(),
    title: child.title,
    label: child.title,
  }));
};

import { AuthRouteObject } from "@/@types";
import { studentRoute } from "@/router/routes/student";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const handleTabChange = (value: string) => {
    navigate(`/student/${value}`);
  };

  const tabs = useMemo(() => getTabs(studentRoute.children), [studentRoute.children]);

  const backSlash = "id" in params ? -2 : -1;
  const defaultTab = location.pathname.split("/").slice(backSlash)[0];

  return (
    <Box w="100%">
      <SegmentedControl
        defaultValue={defaultTab}
        fullWidth
        data={tabs}
        onChange={handleTabChange}
      />
    </Box>
  );
}
