import { Image, ImageProps } from "@mantine/core";

import { imageStyle, wrapperStyle } from "./style";

export default function CoverImage(props: ImageProps) {
    return (
        <Image
            {...props}
            styles={wrapperStyle}
            imageProps={{ style: imageStyle }}
        ></Image>
    );
}
