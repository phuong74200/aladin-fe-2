import { Carousel } from "@mantine/carousel";
import { Center, Title } from "@mantine/core";

export default function LandingCarousel() {
    return (
        <Carousel w={"100%"} height="100%" mx="auto" withIndicators loop>
            <Carousel.Slide>
                <Center bg="blue" h="100%">
                    <Title order={1}>1</Title>
                </Center>
            </Carousel.Slide>
            <Carousel.Slide>
                <Center bg="blue" h="100%">
                    <Title order={1}>2</Title>
                </Center>
            </Carousel.Slide>
            <Carousel.Slide>
                <Center bg="blue" h="100%">
                    <Title order={1}>3</Title>
                </Center>
            </Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}
