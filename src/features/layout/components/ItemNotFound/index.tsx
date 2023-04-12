import { Center, Image, Stack, StackProps, Title } from "@mantine/core";

import { ASSET_NO_RESULT } from "@/constants/images";

export default function ItemNotFound(props: StackProps) {
  return (
    <Stack spacing={50} {...props}>
      <Center>
        <Image width={200} src={ASSET_NO_RESULT}></Image>
      </Center>
      <Title order={5} align="center">
        Không có thông tin hiển thị. Hãy chọn lớp học bạn quan tâm để xem chi tiết!
      </Title>
    </Stack>
  );
}
