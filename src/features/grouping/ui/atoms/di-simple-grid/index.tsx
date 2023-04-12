import { SimpleGrid } from "@mantine/core";

export default function DiSimpleGrid({ children }: React.PropsWithChildren) {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
      {children}
    </SimpleGrid>
  );
}
