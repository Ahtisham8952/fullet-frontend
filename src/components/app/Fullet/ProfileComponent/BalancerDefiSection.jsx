import { Box,Flex,Image,Text,Button } from '@chakra-ui/react'
import React from 'react'

const BalancerDefiSection = () => {
  return (
    <Box border="1px solid rgba(255, 255, 255, 0.3)" borderRadius={"20px"} bg="#150C35" my="30px">
        <Box bg="rgba(83, 30, 135, 0.34)" p="22px 18px" borderBottom={"1px solid rgba(255, 255, 255, 0.3)"} borderRadius={"20px"}>
            <Flex justifyContent={"space-between"} alignItems="center" >
<Flex gap="20px" alignItems={"center"}>
<Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="700"
            lineHeight={"17px"}
          >
       ETH/LIT on Balancerv2 (Ethereum)
          </Text>
          <Image src="/tokensbar.svg"></Image>
</Flex>
<Button bg="#C68CFF" colorScheme={"#C68CFF"} 
     color="#FFFFFF"
     fontSize="12px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 18px"
     borderRadius={"50px"}
     mr="10px"
     >
       Details
     </Button>
            </Flex>
        </Box>
        <Flex p="21px 24px" justifyContent={"space-between"}>
        <Box  >
                <Flex alignItems={"center"} gap="10px" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
    Capital provided
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"24px"}
          >
   $112.70K
          </Text>

            </Box>
            <Box  >
                <Flex alignItems={"center"} gap="10px" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
  Assets gains
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"24px"}
          >
   -$7,854.24K
          </Text>

            </Box>
            <Box  >
                <Flex alignItems={"center"} gap="10px" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
   Capital market value
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"24px"}
          >
  $107.70K
          </Text>

            </Box>
            <Box  >
                <Flex alignItems={"center"} gap="10px" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
   Position income
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"24px"}
          >
   -$20.99
          </Text>

            </Box>
            <Box  >
                <Flex alignItems={"center"} gap="10px" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
   Total est. value
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"24px"}
          >
   $104,88K
          </Text>

            </Box>
        </Flex>

    </Box>
  )
}

export default BalancerDefiSection