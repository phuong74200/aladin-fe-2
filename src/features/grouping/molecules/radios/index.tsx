import { Group, Radio, SimpleGrid, Text } from "@mantine/core";

import { useStyles } from "./style";

interface RadiosProps {
  label?: string;
  data: {
    value: string;
    label: string;
  }[];
}

export default function Radios(props: RadiosProps) {
  const { classes } = useStyles();

  return (
    <SimpleGrid className={classes.noPaddingTop} cols={2} spacing="lg" verticalSpacing="sm">
      <Text weight="bold">{props.label}</Text>
      <Radio.Group label={undefined}>
        <Group position="apart">
          {props.data.map((radio) => (
            <Radio value={radio.value} key={radio.value} label={radio.label} />
          ))}
        </Group>
      </Radio.Group>
    </SimpleGrid>
  );
}
