import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import DefenceTabs from "./DefenceTabs";
import TrendingSlider from "../TopTrendingComponent/TrendingSlider"
const Tokens = [
  {
    bg:'rgba(123, 255, 207, 0.4)',
    Currency: "/tokens1.svg",
    Name: "AVAX - Avalanche",
    Value: " $12 000 500   ",
    Percentage: " 46%",
  },
  {
    bg:'rgba(255, 109, 109, 0.4)',
    Currency: "/tokens2.svg",
    Name: "AVAX - Avalanche",
    Value: " $12 000 500   ",
    Percentage: " 46%",
  },
  {
    bg:'rgba(83, 30, 135, 0.34)',
    Currency: "/tokens3.svg",
    Name: "AVAX - Avalanche",
    Value: " $12 000 500   ",
    Percentage: " 46%",
  },
 
];
const DefenceMain = () => {
  return (
    <Box>
      <Box px={{ base: "24px", lg: "100px" }} mt="40px">
        <Text
          mb="18px"
          color="#FFFFFF"
          fontSize="48px"
          fontWeight="600"
          lineHeight={"150%"}
        >
          Defence
        </Text>
        <Box display={"flex"} alignItems="center" gap="32px" mb="40px">
          <Text
            color="#665487"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"30px"}
          >
            Active
          </Text>
          <Box bg="#220E46" h="1px" w="100%"></Box>
        </Box>
        <Flex gap="42px" flexDirection={{base:'column',md:'row'}} alignItems="center">
          <Box
            cursor={"pointer"}
            bg="rgba(109, 109, 109, 0.4)"
            borderRadius={"30px"}
            py="4px"
          >
            <Flex gap="11px" alignItems={"center"} pl="4px" pr="16px">
              <Image src="/luaddcore.svg"></Image>
              <Text
                color="#FFFFFF"
                fontSize="12px"
                fontWeight="700"
                lineHeight={"30px"}
              >
                Create defence
              </Text>
            </Flex>
          </Box>
          <Flex gap="26px" flexWrap={{base:'wrap',sm:'nowrap'}}>
            {Tokens.map((li) => (
              <Box position={"relative"} px={{ base: "0px", md: "12px" }} w="137px">
                <Box position={"absolute"} top="0px"left={"9px"}>
                <Image src="/crossvig.svg"></Image>
                </Box>
                <Box
                  bg={li.bg}
                  borderRadius={"50px"}
                  p="4px"
                  w="137px"
                >
                  <Flex alignItems={"center"} gap="8px">
                    <Image src={li.Currency}></Image>
                    <Box>
                      <Text
                        mb="8px"
                        color="#FFFFFF"
                        fontSize="10px"
                        fontWeight="500"
                        lineHeight={"10px"}
                      >
                        {li.Name}
                      </Text>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems="center"
                      >
                        <Flex gap="5px" alignItems={"center"}>
                          <Image src="/upvalue.svg"></Image>
                          <Text
                            color="#FFFFFF"
                            fontSize="6px"
                            fontWeight="500"
                            lineHeight={"6px"}
                          >
                            {li.Value}
                          </Text>
                        </Flex>
                        <Text
                          color="#7BFF80"
                          fontSize="6px"
                          fontWeight="500"
                          lineHeight={"6px"}
                        >
                          {li.Percentage}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
        <Box>
            <DefenceTabs/>
        </Box>
        <Flex gap={"35px"} flexDirection={{base:'column',lg:'row'}} mb="30px">
                <Box w={{base:'100%',lg:'50%'}} mb="30px">
                <TrendingSlider/>
                </Box>
                <Box w={{base:'100%',lg:'50%'}}>
                <TrendingSlider/>
                </Box>
            </Flex>
      </Box>
    </Box>
  );
};

export default DefenceMain;
