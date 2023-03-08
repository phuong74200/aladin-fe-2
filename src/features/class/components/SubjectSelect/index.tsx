import { Select } from "@mantine/core";
import { IconSchool } from "@tabler/icons";

const majors = [
    { value: "all", label: "Tất cả các môn" },
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
];

export default function SubjectSelect() {
    return <Select icon={<IconSchool />} placeholder="Môn học" data={majors} />;
}
