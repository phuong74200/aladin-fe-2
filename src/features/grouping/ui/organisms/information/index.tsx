import { createContext, useMemo } from "react";
import {
  Accordion,
  Grid,
  Group,
  NumberInput,
  NumberInputProps,
  Radio,
  RadioProps,
  Select,
  SelectProps,
  Spoiler,
  Stack,
  Text,
  TextInput,
  TextInputProps,
  TextProps as MantineTextProps,
  useMantineTheme,
} from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";

import { CompoundContext } from "@/@types/Compound";

import DiSimpleGrid from "../../atoms/di-simple-grid";
import DividerControl from "../../molecules/divider-control";

import { numberInputStyle, textInputStyle } from "./style";

const InformationContext = createContext<CompoundContext>({
  displayName: "Information",
});

interface InformationProps extends React.PropsWithChildren {
  label: string;
}

export default function Information({ children, label }: InformationProps) {
  const theme = useMantineTheme();

  const value = useMemo(() => ({ displayName: "Information" }), []);

  return (
    <InformationContext.Provider value={value}>
      <DividerControl textProps={{ color: theme.primaryColor }}>{label}</DividerControl>
      <Accordion.Panel px={4}>
        <Stack>{children}</Stack>
      </Accordion.Panel>
    </InformationContext.Provider>
  );
}

type CurrencyProps = MantineTextProps & {
  label: string;
  value: number;
  gridAlign?: AlignContent;
};

Information.Currency = (props: CurrencyProps) => {
  return (
    <Grid gutter={0} justify="space-between">
      <Group>
        <IconSchool size={16} />
        <Text {...props} weight="bold">
          {props.label}
        </Text>
      </Group>
      <Text {...props}>
        {props.value.toLocaleString("en-US")}
        <sup> đ</sup>
      </Text>
    </Grid>
  );
};

interface TextProps {
  label: string;
  value: React.ReactNode;
}

Information.Text = (props: TextProps) => {
  return (
    <Grid gutter={0}>
      <Grid.Col span={4}>
        <Group>
          <IconSchool size={16} />
          <Text weight="bold">{props.label}</Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={8}>
        <Text>{props.value}</Text>
      </Grid.Col>
    </Grid>
  );
};

interface SpoilerProps {
  label: string;
  value: React.ReactNode;
}

Information.Spoiler = ({ label, value }: SpoilerProps) => {
  const FONT_SIZE = 14;
  const LINE_HEIGHT_IN_REM = 16 / 14;
  const DISPLAY_LINES = 3;

  return (
    <Grid gutter={0}>
      <Grid.Col span={4}>
        <Group>
          <IconSchool size={16} />
          <Text weight="bold">{label}</Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={8}>
        <Spoiler
          maxHeight={FONT_SIZE * LINE_HEIGHT_IN_REM * DISPLAY_LINES}
          showLabel="Thêm"
          hideLabel="Ẩn"
          style={{ fontSize: FONT_SIZE }}
        >
          {value}
        </Spoiler>
      </Grid.Col>
    </Grid>
  );
};

Information.NumberInput = (props: NumberInputProps) => {
  return (
    <Grid gutter={0}>
      <Grid.Col span={4}>
        <Group>
          <IconSchool size={16} />
          <Text weight="bold">{props.label}</Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={8}>
        <NumberInput
          {...props}
          w="100%"
          variant="unstyled"
          styles={numberInputStyle}
          label={undefined}
        />
      </Grid.Col>
    </Grid>
  );
};

interface TextInputType extends TextInputProps {
  justify?: "space-between" | "center";
}

Information.TextInput = (props: TextInputType) => {
  return (
    <Grid gutter={0} justify={props.justify}>
      <Group>
        <IconSchool size={16} />
        <Text weight="bold">{props.label}</Text>
      </Group>
      <TextInput
        {...props}
        w={145}
        label={undefined}
        variant="unstyled"
        styles={textInputStyle}
        style={{ textAlign: "right" }}
      />
    </Grid>
  );
};

Information.Select = (props: SelectProps) => {
  return (
    <DiSimpleGrid>
      <Text weight="bold">{props.label}</Text>
      <Select {...props} w="100%" label={undefined} variant="unstyled" styles={textInputStyle} />
    </DiSimpleGrid>
  );
};

Information.Radio = (props: RadioProps) => {
  return (
    <DiSimpleGrid>
      <Text weight="bold">{props.label}</Text>
      <Radio.Group>
        <Group>{props.children}</Group>
      </Radio.Group>
    </DiSimpleGrid>
  );
};
