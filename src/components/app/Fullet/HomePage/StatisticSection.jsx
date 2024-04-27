import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const StatisticSection = () => {
  return (
    <Box bg="#1E134B">
      <Box  w="100%"  px={{base:'20px',xxl:'102px'}} mx="auto" py="50px">
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Box mb={{ base: "20px", sm: "0px" }}>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "16px", md: "24px", lg: "30px", xl: "48px" }}
              fontWeight="700"
              lineHeight={"150%"}
              textAlign="center"
            >
              150 000
            </Text>
            <Text
              color="#8980BD"
              fontSize="18px"
              fontWeight="500"
              lineHeight={"150%"}
              textAlign="center"
            >
              Worldwide Users
            </Text>
          </Box>
          <Box mb={{ base: "20px", sm: "0px" }}>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "16px", md: "24px", lg: "30px", xl: "48px" }}
              fontWeight="700"
              lineHeight={"150%"}
              textAlign="center"
            >
              1 000 000 000
            </Text>
            <Text
              color="#8980BD"
              fontSize="18px"
              fontWeight="500"
              lineHeight={"150%"}
              textAlign="center"
            >
              Transactions Tracked
            </Text>
          </Box>
          <Box mb={{ base: "20px", sm: "0px" }}>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "16px", md: "24px", lg: "30px", xl: "48px" }}
              fontWeight="700"
              lineHeight={"150%"}
              textAlign="center"
            >
              $ 61 000 000 000
            </Text>
            <Text
              color="#8980BD"
              fontSize="18px"
              fontWeight="500"
              lineHeight={"150%"}
              textAlign="center"
            >
              Transactions Tracked
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default StatisticSection;
