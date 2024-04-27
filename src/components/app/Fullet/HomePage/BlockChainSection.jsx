import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import BlockChainsSlider from "./BlockChainsSlider";

const BlockChainSection = () => {
  return (
    <Box bg="#1E134B">
      <Box w="100%"  px={{base:'20px',xxl:'102px'}} mx="auto" py="50px">
        <Text
          color="#FFFFFF"
          fontSize={{ base: "16px", md: "24px", lg: "30px", xl: "48px" }}
          fontWeight="700"
          lineHeight={"150%"}
        >
          Track Different Blockchains
        </Text>
        <Box mt="43px">
          <BlockChainsSlider />
        </Box>
      </Box>
    </Box>
  );
};

export default BlockChainSection;
