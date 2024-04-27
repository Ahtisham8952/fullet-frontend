import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import EmailInput from "./EmailInput";

const HeroSection = () => {
  return (
    <Box bg="#04031A" px="20px" py="40px" minH={"100vh"} position={"relative"}>
      <Box position={"absolute"} right="0px" top="0px">
        <Image src="/fade-1.png">

        </Image>

      </Box>
      <Box position={"absolute"} left="0px" >
        <Image src="/fade-2.png">

        </Image>

      </Box>
      <Flex
        h={{ base: "auto", lg: "738px" }}
        alignItems={"center"}
        justifyContent="space-between"
        flexDirection={{ base: "column-reverse", lg: "row" }}
      >
        <Box
          ml={{ base: "0px", lg: "103px" }}
          mb={{ base: "20px", lg: "0px" }}
          w={{ base: "100%", lg: "50%" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          display="flex"
          justifyContent={"center"}
          flexDirection="column"
        >
          <Text
            mb={{
              base: "30px",
              md: "66px",
              lg: "90px",
              xl: "110px",
              xxl: "196px",
            }}
            color="#FFFFFF"
            fontSize={{
              base: "25px",
              md: "40px",
              lg: "50px",
              xl: "60px",
              xxl: "96px",
            }}
            fontWeight="700"
            lineHeight={{
              base: "40px",
              md: "50px",
              lg: "60px",
              xl: "90px",
              xxl: "110px",
            }}
          >
            Tracking Web3 Matters
          </Text>
          <EmailInput/>
          <Text
            color="#907BFF"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
            maxW="494px"
          >
            Welcome to the best web3 tracker on the internet, we help our user
            track wallets, DAOs, DEFI, NFTs & much more
          </Text>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image mx="auto" src="/phonecases.png"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
