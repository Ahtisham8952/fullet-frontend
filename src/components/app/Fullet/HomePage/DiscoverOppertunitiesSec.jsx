import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const DiscoverOppertunitiesSec = () => {
  return (
    <Box bg="#04031A">
      <Box
        bg="rgba(0, 0, 0, 0.5)"
        h={{ base: "auto", lg: "771px" }}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: "20px", lg: "0px" }}
        py={{ base: "40px", lg: "0px" }}
      >
        <Box w={{ base: "100%", lg: "50%" }} ml={{ base: "0px", lg: "103px" }}>
          <Box maxW={"512px"}>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "20px", md: "25px", lg: "40px" }}
              fontWeight="700"
              lineHeight={"150%"}
              textAlign={{base:'center',sm:'left'}}
            >
              Discover Opportunities
            </Text>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "16px", md: "20px", lg: "24px" }}
              fontWeight="400"
              lineHeight={"150%"}
              mb="30px"
              textAlign={{base:'center',sm:'left'}}
            >
              Follow the Smart Money, see where funds are moving to, identify
              new projects or tokens, and trace transactions down to the most
              granular level.
            </Text>
            <Link href="#">
            <Button
              h="48px"
              bg="transparent"
              colorScheme={"transparent"}
              color="#9A99AD"
              fontSize="16px"
              fontWeight="500"
              lineHeight={"24px"}
              p="10px 29px"
              borderRadius={"56px"}
              border="1.5px solid #C0B5FF"
            >
              Discover
            </Button>
            </Link>
           
            <Text
              mt="30px"
              color="#FFFFFF"
              fontSize={{ base: "20px", md: "25px", lg: "40px" }}
              fontWeight="700"
              lineHeight={"150%"}
              textAlign={{base:'center',sm:'left'}}
            >
              Perform Due Diligence
            </Text>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "16px", md: "20px", lg: "24px" }}
              fontWeight="400"
              lineHeight={"150%"}
              mb="30px"
              textAlign={{base:'center',sm:'left'}}
            >
              Follow the Smart Money, see where funds are moving to, identify
              new projects or tokens, and trace transactions down to the most
              granular level.
            </Text>
          </Box>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image src="/chartboard.png"></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverOppertunitiesSec;
