import { Navigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { BackgroundImage, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";

import { styles } from "./style";

import {
    ASSET_GIRL_LAPTOP,
    ASSET_GIRL_TABLET_1,
    ASSET_GIRL_TABLET_2,
    ASSET_MALE_LAPTOP,
} from "~/constants/images";

const autoplayOptions = {
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
};

export default function HomePage() {
    const { width } = useViewportSize();

    const theme = useMantineTheme();

    if (width >= theme.breakpoints.md) return <Navigate to="/login" />;

    return (
        <Carousel
            h="100%"
            w="100%"
            mx="auto"
            withIndicators
            withControls={false}
            loop
            plugins={[Autoplay(autoplayOptions)]}
            styles={styles}
        >
            <Carousel.Slide>
                <BackgroundImage src={ASSET_GIRL_LAPTOP} w="100%" h="100%" />
            </Carousel.Slide>
            <Carousel.Slide>
                <BackgroundImage src={ASSET_GIRL_TABLET_1} w="100%" h="100%" />
            </Carousel.Slide>
            <Carousel.Slide>
                <BackgroundImage src={ASSET_GIRL_TABLET_2} w="100%" h="100%" />
            </Carousel.Slide>
            <Carousel.Slide>
                <BackgroundImage src={ASSET_MALE_LAPTOP} w="100%" h="100%" />
            </Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}
