import { createContext, useMemo } from "react";
import {
  Accordion,
  Group,
  NumberInput,
  NumberInputProps,
  Radio,
  RadioProps,
  Select,
  SelectProps,
  SimpleGrid,
  Spoiler,
  Stack,
  Text,
  TextInput,
  TextInputProps,
  useMantineTheme,
} from "@mantine/core";

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

interface CurrencyProps {
  label: string;
  value: number;
}

Information.Currency = (props: CurrencyProps) => {
  return (
    <DiSimpleGrid>
      <Text weight="bold">{props.label}</Text>
      <Text>
        {props.value.toLocaleString("en-US")}
        <small> VND</small>
      </Text>
    </DiSimpleGrid>
  );
};

interface TextProps {
  label: string;
  value: React.ReactNode;
}

Information.Text = (props: TextProps) => {
  return (
    <DiSimpleGrid>
      <Text weight="bold">{props.label}</Text>
      <Text>{props.value}</Text>
    </DiSimpleGrid>
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
    <DiSimpleGrid>
      <Text weight="bold">{label}</Text>
      <Spoiler
        maxHeight={FONT_SIZE * LINE_HEIGHT_IN_REM * DISPLAY_LINES}
        showLabel="Thêm"
        hideLabel="Ẩn"
        style={{ fontSize: FONT_SIZE }}
      >
        {value}
      </Spoiler>
    </DiSimpleGrid>
  );
};

Information.NumberInput = (props: NumberInputProps) => {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
      <Text weight="bold">{props.label}</Text>
      <NumberInput
        {...props}
        w="100%"
        variant="unstyled"
        styles={numberInputStyle}
        label={undefined}
      />
    </SimpleGrid>
  );
};

Information.TextInput = (props: TextInputProps) => {
  return (
    <DiSimpleGrid>
      <Text weight="bold">{props.label}</Text>
      <TextInput {...props} w="100%" label={undefined} variant="unstyled" styles={textInputStyle} />
    </DiSimpleGrid>
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
