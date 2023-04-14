import { Center, Image, Paper, Stack, Title } from "@mantine/core";

import { ASSET_NO_RESULT } from "@/constants/images";

import { useStyles } from "../../pages/classroom/class-detail.style";

export interface NotFoundProps {
  text?: string;
}

export default function NotFound({ text }: NotFoundProps) {
  const { classes, cx } = useStyles();

  return (
    <Paper className={cx(classes.md__half_w, classes.overflow)} shadow="md" p="lg">
      <Center w="100%" h="100%">
        <Stack spacing={50}>
          <Center>
            <Image width={200} src={ASSET_NO_RESULT}></Image>
          </Center>
          <Title order={5} align="center">
            {text || "Không có thông tin hiển thị. Hãy chọn lớp học bạn quan tâm để xem chi tiết!"}
          </Title>
        </Stack>
      </Center>
    </Paper>
  );
}
