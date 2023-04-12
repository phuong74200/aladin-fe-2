import { SimpleGrid, Text, TextInput as MantineInput, TextInputProps } from "@mantine/core";

import { useStyles } from "./style";

export default function TextInput(props: TextInputProps) {
  const { classes } = useStyles();

  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
      <Text weight="bold">{props.label}</Text>
      <MantineInput {...props} w="100%" label={undefined} variant="unstyled" classNames={classes} />
    </SimpleGrid>
  );
}
