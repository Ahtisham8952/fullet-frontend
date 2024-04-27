import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";

const SubscribeToSmartMoney = () => {
  return (
    <Box
     
      w="100%"
      px={{base:'20px',xxl:'102px'}}
      mx="auto"
      mt={{ base: "30px", lg: "60px" }}
      pb={{ base: "30px", lg: "60px" }}
      position="relative"
    >
      <Box position={"absolute"} left="0px" bottom={"-50%"} >
        <Image src="/fade-4.png">

        </Image>

      </Box>
      <Flex alignItems={"center"} flexDirection={{ base: "column", lg: "row" }}>
        <Box
          w={{ base: "100%", lg: "100%" }}
          mr="14px"
          mb={{ base: "20px", lg: "0px" }}
        >
          <Text
            color="#FFFFFF"
            fontSize={{ base: "20px", md: "25px", lg: "30px", xl: "48px" }}
            fontWeight="700"
            lineHeight={{base:'30px',md:'50px',lg:'70px'}}
            maxW={{ base: "100%", lg: "475px" }}
            mb={{ base: "20px", xl: "91px" }}
            textAlign={{base:'center',sm:'left'}}
          >
            Subscribe To Smart Money
          </Text>
          <Text
            color="#FFFFFF"
            fontSize={{ base: "14px", md: "16px", xl: "18px" }}
            fontWeight="600"
            lineHeight={{base:'23px',md:'30px',lg:'40px'}}
            maxW={{ base: "100%", lg: "495px" }}
            mb="40px"
            textAlign={{base:'center',sm:'left'}}
          >
            Every trade from the top performers, market makers, and funds is at
            your fingertips! Track and follow the top crypto investors.
          </Text>
          <Button
            bg="transparent"
            colorScheme={"transparent"}
            color="#FFFFFF"
            h="57px"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"150%"}
            p="15px 63px"
            borderRadius={"50px"}
            border="1.5px solid #FFFFFF"
          >
            Start Trial Now For $19
          </Button>
        </Box>
        <Box w={{ base: "100%", lg: "100%" }}>
          <Image w="100%" src="/listingbarseffect.png"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default SubscribeToSmartMoney;
