import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import TopAccountsSlider from "./TopAccountsSlider";

const TopAccounts = () => {
  return (
    <Box
      bg="#04031A"
      px="24px"
      pb="40px"
      pt={{ base: "24px", md: "50px", lg: "60px", xl: "144px" }}
      position="relative"
    >
      <Box position={"absolute"} right="0px" >
        <Image src="/fade-3.png">

        </Image>

      </Box>
      <Box
        ml={{ base: "0px", lg: "103px" }}
        mb={{ base: "30px", md: "40px", lg: "50px", xl: "119px" }}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Text
          color="#FFFFFF"
          fontSize={{ base: "30px", md: "30px", lg: "45px", xl: "64px" }}
          fontWeight="700"
          lineHeight={"70px"}
          textAlign={{ base: "center", lg: "left" }}
        >
          Top Accounts
        </Text>
      </Box>
      <Box
        mb={{ base: "30px", md: "50px", lg: "80px", xl: "80px", xxl: "117px" }}
      >
        <TopAccountsSlider />
      </Box>
      <Flex justifyContent={"center"}>
      <Link href="#"> 
        <Button
          bg="transparent"
          colorScheme={"transparent"}
          color="#FFFFFF"
          h="57px"
          fontSize="20px"
          fontWeight="500"
          lineHeight={"150%"}
          p="15px 63px"
          borderRadius={"50px"}
          border="1.5px solid #FFFFFF"
        >
          View All
        </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default TopAccounts;
