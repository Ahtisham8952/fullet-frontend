import { Box, Button, Image, Img,Flex,Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Currency=[
    {
Currency:'/avalncheicon.svg',
Name:'AVAX - Avalanche',
Value:' $12 000 500   ',
Percentage:' 46%',
    },
    {
        Currency:'/avalncheicon.svg',
        Name:'AVAX - Avalanche',
        Value:' $12 000 500   ',
        Percentage:' 46%',
            },
            {
                Currency:'/avalncheicon.svg',
                Name:'AVAX - Avalanche',
                Value:' $12 000 500   ',
                Percentage:' 46%',
                    },
                    {
                        Currency:'/avalncheicon.svg',
                        Name:'AVAX - Avalanche',
                        Value:' $12 000 500   ',
                        Percentage:' 46%',
                            },
                            {
                                Currency:'/avalncheicon.svg',
                                Name:'AVAX - Avalanche',
                                Value:' $12 000 500   ',
                                Percentage:' 46%',
                                    },
                                    {
                                        Currency:'/avalncheicon.svg',
                                        Name:'AVAX - Avalanche',
                                        Value:' $12 000 500   ',
                                        Percentage:' 46%',
                                            },
]

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
      slidesToShow: 4,
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
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box position={"relative"} border="1px solid white" borderRadius={"50px"} py="29px">
        <Box bg="#000000" position={"absolute"} bottom="-23px" right={"78px"} border="1px solid white" py="4px" px="10px" borderRadius={"30px"}>
<Flex>
<Button
            justifyContent={"left"}
            px="0px"
            bg="transparent"
            colorScheme={"transparent"}
            onClick={this.previous}
          >
            <Image
               w="14px"
              src="/leftarrow.svg"
            ></Image>
          </Button>
          <Button
            justifyContent={"right"}
            px="0px"
            onClick={this.next}
            bg="transparent"
            colorScheme={"transparent"}
          >
            <Image
              w="14px"
              src="/rightarrow.svg"
            ></Image>
          </Button>

</Flex>
        </Box>
      <Box bg="#000000" position={"absolute"} top="-23px" left={"78px"} border="1px solid white" py="10px" px="22px" borderRadius={"30px"}> 
<Flex alignItems={"center"} gap="10px">
    <Image src="/hotflame.svg"></Image>
    <Text
            
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
          >
     Hot Today
          </Text>
</Flex>
      </Box>
        <Box
          maxW={"750px"}
          w="100%"
          mx="auto"
        
        >
          <Slider ref={(c) => (this.slider = c)} {...settings}>
          {Currency.map((li) => (
  <Box px={{ base: "0px", md: "12px" }} w="137px" >
        <Box bg="rgba(83, 30, 135, 0.34)" borderRadius={"50px"} p="4px" w="137px">
            <Flex alignItems={"center"} gap="8px">
            <Image src={li.Currency}></Image>
            <Box>
            <Text
            mb="8px"
            color="#FFFFFF"
            fontSize="10px"
            fontWeight="500"
            lineHeight={"10px"}
          >
     {li.Name}
          </Text>
          <Flex justifyContent={"space-between"} alignItems="center">
            <Flex gap="5px" alignItems={"center"}>
                <Image src="/upvalue.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="6px"
            fontWeight="500"
            lineHeight={"6px"}
          >
     {li.Value}
          </Text>
            </Flex>
            <Text
            
            color="#7BFF80"
            fontSize="6px"
            fontWeight="500"
            lineHeight={"6px"}
          >
       {li.Percentage}
          </Text>
          </Flex>
            </Box>
            </Flex>
           
            </Box>    
  </Box>
 ))} 
            
          </Slider>
        </Box>
      </Box>
    );
  }
}
