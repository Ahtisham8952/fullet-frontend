import { Box, Flex, Text, Image, Button, Link } from "@chakra-ui/react";
import React from "react";

const FollowSmartMoney = () => {
  return (
    <Box
     
      w="100%"
      px={{base:'20px',xxl:'102px'}}
      mx="auto"
      mt={{ base: "30px", lg: "214px" }}
      pb={{ base: "30px", lg: "214px" }}
    >
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
            maxW={{ base: "100%", lg: "327px" }}
            mb={{ base: "20px", xl: "91px" }}
            textAlign={{base:'center',sm:'left'}}
          >
            Follow Smart Money
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
            Try Beta
          </Button>
          </Link>
        </Box>
        <Box w={{ base: "100%", lg: "100%" }}>
          <Image w="100%" src="/listingimage.png"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default FollowSmartMoney;
