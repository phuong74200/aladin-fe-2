import { Carousel } from "@mantine/carousel";
import { Center } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

import { styles } from "./style";

const autoplayOptions = {
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
};

export default function LandingCarousel() {
    return (
        <Carousel
            h="100%"
            w="auto"
            mx="auto"
            withIndicators
            withControls={false}
            loop
            plugins={[Autoplay(autoplayOptions)]}
            styles={styles}
        >
            <Carousel.Slide>
                <Center bg="red" w="100%" h="100%">
                    1
                </Center>
            </Carousel.Slide>
            <Carousel.Slide>
                <Center bg="green" w="100%" h="100%">
                    2
                </Center>
            </Carousel.Slide>
            <Carousel.Slide>
                <Center bg="blue" w="100%" h="100%">
                    3
                </Center>
            </Carousel.Slide>
            {/* <Carousel.Slide>
                <CoverImage src={ASSET_GIRL_TABLET_1} />
            </Carousel.Slide>
            <Carousel.Slide>
                <CoverImage src={ASSET_GIRL_TABLET_2} />
            </Carousel.Slide>
            <Carousel.Slide>
                <CoverImage src={ASSET_MALE_LAPTOP} />
            </Carousel.Slide> */}
            {/* ...other slides */}
        </Carousel>
    );
}
