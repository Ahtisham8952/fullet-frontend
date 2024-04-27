import {
    ChakraProvider,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Image,
    Flex,
    Text
  } from "@chakra-ui/react";
import React, { useState } from 'react'


function RangeSlide({RangeStart,RangeEnd,BarBg}) {
    const [ZoomsliderValue, setZoomSliderValue] = useState(0);
  return (
    <Box w="100%" pb="24px" maxW={"269px"} mx="16px">
   <Flex alignItems={"center"} justifyContent="space-between" pb="6px" px="16px">
   <Text
            
            color="rgba(255, 255, 255, 0.55)"
            fontSize="11px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      {RangeStart}
          </Text>
          <Text
            
            color="#FFFFFF"
            fontSize="11px"
            fontWeight="600"
            lineHeight={"150%"}
          >
  {RangeEnd}
          </Text>
   </Flex>


<Box >
<Box  border="1px solid #444444" display={"flex"} justifyContent="center" px="16px" borderRadius={"40px"} h="34px">


<Slider
  
  w="100%"
  defaultValue={100}
 
  aria-label="slider-ex-1"
  onChange={(val) => setZoomSliderValue(val)}
  focusThumbOnChange={false}
>
  <SliderTrack bg="#264163" h="5px" borderRadius={"64px"}>
    <SliderFilledTrack bg={BarBg}/>
  </SliderTrack>
 
  
  <SliderThumb bg="#FFFFFF" h="11px" w="11px" />
</Slider>
</Box>

</Box>
</Box>
  )
}

export default RangeSlide