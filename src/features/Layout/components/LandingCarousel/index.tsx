import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import CoverImage from "../CoverImage";

import {
    ASSET_GIRL_LAPTOP,
    ASSET_GIRL_TABLET_1,
    ASSET_GIRL_TABLET_2,
    ASSET_MALE_LAPTOP,
} from "~/constants/images";

const autoplayOptions = {
    delay: 2500,
};

export default function LandingCarousel() {
    return (
        <Carousel
            w={800}
            mx="auto"
            withIndicators
            loop
            plugins={[Autoplay(autoplayOptions)]}
        >
            <Carousel.Slide>
                <CoverImage src={ASSET_GIRL_LAPTOP} />
            </Carousel.Slide>
            <Carousel.Slide>
                <CoverImage src={ASSET_GIRL_TABLET_1} />
            </Carousel.Slide>
            <Carousel.Slide>
                <CoverImage src={ASSET_GIRL_TABLET_2} />
            </Carousel.Slide>
            <Carousel.Slide>
                <CoverImage src={ASSET_MALE_LAPTOP} />
            </Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}
