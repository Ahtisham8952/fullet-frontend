import { Box, Button, Image, Img } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box position={"relative"}>
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"space-between"}
          zIndex={"99"}
          top="118px"
        >
          <Button
            justifyContent={"left"}
            px="0px"
            bg="transparent"
            colorScheme={"transparent"}
            onClick={this.previous}
          >
            <Image
              w={{ base: "16px", md: "22px", lg: "30px", xl: "30px" }}
              src="/leftarrow.svg"
            ></Image>
          </Button>
        </Box>
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"space-between"}
          right="0px"
          top="118px"
          zIndex={"99"}
        >
          <Button
            justifyContent={"right"}
            px="0px"
            onClick={this.next}
            bg="transparent"
            colorScheme={"transparent"}
          >
            <Image
              w={{ base: "16px", md: "22px", lg: "30px", xl: "30px" }}
              src="/rightarrow.svg"
            ></Image>
          </Button>
        </Box>
        <Box
          
          w="100%"
          mx="auto"
          px={{ base: "40px", md: "40px", lg: "80px" }}
        >
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <Box >
              <SliderCard
                image="/accountimage-1.png"
                Name="Perry Unknown"
                TrxID="0x791274c1252EdF95C..."
              />
            </Box>
            <Box >
              <SliderCard
                image="/accountimage-2.png"
                Name="Perry Unknown"
                TrxID="0x791274c1252EdF95C..."
              />
            </Box>
            <Box >
              <SliderCard
                image="/accountimage-3.png"
                Name="Perry Unknown"
                TrxID="0x791274c1252EdF95C..."
              />
            </Box>
            <Box >
              <SliderCard
                image="/accountimage-4.png"
                Name="Perry Unknown"
                TrxID="0x791274c1252EdF95C..."
              />
            </Box>
            <Box >
              <SliderCard
                image="/accountimage-5.png"
                Name="Perry Unknown"
                TrxID="0x791274c1252EdF95C..."
              />
            </Box>
            <Box >
              <SliderCard
                image="/accountimage-1.png"
                Name="Perry Unknown"
                TrxID="0x791274c1252EdF95C..."
              />
            </Box>
          </Slider>
        </Box>
      </Box>
    );
  }
}
