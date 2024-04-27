import { Button, Text, Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const DontMissOut = () => {
  return (
    <Box
   
      w="100%"
      px={{base:'20px',xxl:'102px'}}
      mx="auto"
   
      position='relative'
    >
      <Box position={"absolute"} left="0px" bottom={"-40%"} >
        <Image src="/fade-4.png">

        </Image>

      </Box>
      <Flex
        gap="20px"
        alignItems={"center"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
      >
        <Box>
          <Box mb={{ base: "30px", md: "40px", lg: "60px", xl: "204px" }}>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "20px", md: "25px", lg: "30px", xl: "57px" }}
              fontWeight="700"
              lineHeight={"70px"}
            >
              Don’t miss out
            </Text>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "14px", md: "16px", xl: "18px" }}
              fontWeight="600"
              lineHeight={"40px"}
              maxW={{ base: "100%", lg: "495px" }}
            >
              on the subscription
            </Text>
          </Box>

          <Image src="/storesimag.png"></Image>
        </Box>
        <Box>
          <Image src="/comingsoonjeb.png"></Image>
        </Box>
        <Box>
          <Image src="/mobilephoneimage.png"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default DontMissOut;
