import { Group, Select, TextInput } from "@mantine/core";

export default function FilterBar() {
  return (
    <Group grow spacing="lg">
      <Select placeholder="Ngành học" data={[]} />
      <Select placeholder="Môn học" data={[]} />
      <TextInput placeholder="Tìm kiếm môn học" />
    </Group>
  );
}
