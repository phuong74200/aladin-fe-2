import { Carousel, CarouselProps } from "@mantine/carousel";
import { BackgroundImage } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

import {
  ASSET_GIRL_LAPTOP,
  ASSET_GIRL_TABLET_1,
  ASSET_GIRL_TABLET_2,
  ASSET_MALE_LAPTOP,
} from "@/constants/images";

import { styles } from "./style";

const autoplayOptions = {
  delay: 2500,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
};

export default function LandingCarousel(props: CarouselProps) {
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
      {...props}
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
