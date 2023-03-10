import { Select } from "@mantine/core";
import { IconBooks } from "@tabler/icons";

const majors = [
    { value: "all", label: "Tất cả các ngành" },
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
];

export default function MajorSelect() {
    return (
        <Select icon={<IconBooks />} placeholder="Ngành học" data={majors} />
    );
}
