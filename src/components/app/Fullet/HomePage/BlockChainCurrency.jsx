import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const BlockChainCurrency = () => {
  return (
    <Box bg="rgba(83, 30, 135, 0.34)" p="7px" borderRadius={"100px"} mx="12px" >
      <Flex alignItems={"center"}>
        <Image src="/ethriumimg.svg"></Image>
        <Text
          ml="18px"
          color="#FFFFFF"
          fontSize="18px"
          fontWeight="700"
          lineHeight={"150%"}
        >
          Ethereum
        </Text>
      </Flex>
    </Box>
  );
};

export default BlockChainCurrency;
