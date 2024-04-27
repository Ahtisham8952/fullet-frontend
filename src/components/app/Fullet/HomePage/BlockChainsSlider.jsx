import { Box, Button, Image, Img } from "@chakra-ui/react";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";
import BlockChainCurrency from "./BlockChainCurrency";

export default class BlockChainsSlider extends Component {
 
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
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
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
        <Box  w="100%" mx="auto">
          <Slider ref={(c) => (this.slider = c)} {...settings}  
>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
            <Box px={{ base: "0px", md: "12px" }} w="193px">
              <BlockChainCurrency />
            </Box>
          </Slider>
        </Box>
      </Box>
    );
  }
}
