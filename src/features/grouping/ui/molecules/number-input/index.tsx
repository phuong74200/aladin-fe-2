import { NumberInput as InputBase, NumberInputProps, SimpleGrid, Text } from "@mantine/core";

import { styles } from "./style";

export default function NumberInput(props: NumberInputProps) {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
      <Text weight="bold">{props.label}</Text>
      <InputBase {...props} w="100%" variant="unstyled" styles={styles} label={undefined} />
    </SimpleGrid>
  );
}
